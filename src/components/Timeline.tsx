import React from 'react';
import { useTranslation } from 'react-i18next';
import {getFontStyles} from '../components/FontStyles';

// Define the interface for timeline items
interface TimelineItem {
  date: string;
  title: string;
  description: string;
  imgUrl: string;
  link: string;
}

// Define the interface for the timeline component's props
interface TimelineProps {
  data: TimelineItem[];
}

// Implementation of the timeline component
const Timeline: React.FC<TimelineProps> = ({ data }) => {
  // Group data by year
  const groupedData = data.reduce((acc, item) => {
    const year = item.date.split(' / ')[0]; // Extract the year
    if (!acc[year]) {
      acc[year] = []; // Create an array for the year if it doesn't exist
    }
    acc[year].push(item); // Add the item to the corresponding year's array
    return acc;
  }, {} as Record<string, TimelineItem[]>);

  const { t, i18n } = useTranslation();
  const fontStyles = getFontStyles(i18n.language);

  return (
    <div className="container mx-auto p-4">
      <div className="relative wrap overflow-hidden p-10 h-full">
        {Object.keys(groupedData).map((year, yearIndex) => (
          <React.Fragment key={year}>
            <div className="flex items-start w-full">
              <div className="w-1/5 flex flex-col items-center">
                {yearIndex > 0 && <div className="w-1 h-10 bg-gray-700"></div>}
                <div className="text-lg font-bold mb-2">{year}</div>
                <div className={`w-1 ${yearIndex === Object.keys(groupedData).length - 1 ? 'h-10' : 'h-full'} bg-gray-700`}></div>
              </div>
              <div className="w-4/5 pl-8"></div>
            </div>
            {groupedData[year].map((item, index) => (
              <div key={index} className="relative flex items-stretch w-full">
                <div className="w-1/5 flex flex-col items-center">
                  <div className="w-1 flex-grow bg-gray-700"></div>
                  <div className="w-1 h-8 bg-gray-700"></div>
                </div>
                <div className="w-4/5 pl-8 flex-grow flex flex-col">
                  {item.imgUrl && (
                    <a href={item.link} title={item.title}>
                      <img src={item.imgUrl} alt={item.title} className="w-full h-auto mb-4 rounded-lg" />
                    </a>
                  )}
                  <div className="flex-grow">
                    <h4 className={`sm:${fontStyles.desktop.subslogan} ${fontStyles.mobile.subslogan} font-semibold mb-1`}>{item.title}</h4>
                    <span className={`sm:${fontStyles.desktop.title} ${fontStyles.mobile.title} mb-1`}>{item.date}</span>
                    <p className={`sm:${fontStyles.desktop.body} ${fontStyles.mobile.body} py-3`}>{item.description}</p>
                  </div>
                  <div className='h-8'></div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
