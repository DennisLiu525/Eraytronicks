import React from 'react';

// Define the interface for timeline items
interface TimelineItem {
  date: string;
  title: string;
  type: string;
  units: string;
  location: string;
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
                  {/* <a href={item.link} title={item.title}>
                    <img src={item.imgUrl} alt={item.title} className="w-full h-auto mb-4 rounded-lg" />
                  </a> */}
                  <div className="flex-grow">
                    <h4 className="text-xl font-semibold mb-1">{item.title}</h4>
                    <span className="text-gray-600">{item.date}</span>
                    <h5 className="py-1">類型：{item.type}</h5>
                    <h5>戶數：{item.units}</h5>
                    <h5>座落地點：{item.location}</h5>
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
