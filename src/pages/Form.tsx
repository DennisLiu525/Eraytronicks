import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';
import { useColor } from '../context/ColorContext';

const FormPage: React.FC = () => {
    const { t } = useTranslation();
    const { isBlack } = useColor();
    const commonStyles = isBlack ? 'bg-black text-white' : 'bg-white text-black';
    const formLabelFont = isBlack ? 'text-white' : 'text-slate-700';
    const inputBgColor = isBlack ? 'bg-gray-700' : 'bg-white';

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        idNumber: '',
        gender: '',
        birthDate: '',
        disability: '',
        militaryStatus: '',
        contactNumber: '',
        mobileNumber: '',
        contactTime: '',
        address: '',
        startDate: '',
        employmentStatus: '',
        skills: '',
        resume: null as File | null,
        position: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setFormData(prevState => ({
            ...prevState,
            resume: file
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const emailData = {
            ...formData,
            resume: formData.resume ? formData.resume.name : ''
        };

        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', emailData, 'YOUR_USER_ID')
            .then((result) => {
                console.log('Email sent successfully:', result.text);
            }, (error) => {
                console.error('Error sending email:', error.text);
            });
    };

    return (
        <div className={`mx-auto max-w ${commonStyles}`}>
            <div className='container border p-6'>
                <h1 className="pt-[10%] text-3xl font-bold mb-4">加入昱叡電子</h1>
                <div className='text-gray-500'>
                    <p>{t('您好，歡迎填寫履歷資料。')}</p>
                    <p className='flex'>{t('紅色')} <p className="text-red-500">*</p> {t('符號欄位為必填。另外，也請您將已準備好的履歷/自傳資料檔案上傳。')}</p>
                    <p>{t('本公司基於人才招募的目的，在一定時間內保留您應徵於附於昱叡電子人才資料庫，並僅供內部徵才使用')}</p>
                    <p>{t('有關請求停止蒐集、處理、利用或刪除您的資料，請與本公司HR聯絡')}</p>
                    <p>{t('Tel:03-4201107')}</p>
                    <p>{t('Email:billts.eraytroniks@gmail.com')}</p>
                </div>
                <h1 className='mt-7 text-4xl font-bold'>{t('基本資料')}</h1>
                <div className='border-2 h-1'></div>
                <form className='mt-3 font-bold' onSubmit={handleSubmit}>
                    <div className="mb-4 flex">
                        <label className={`flex ${formLabelFont}`}>
                            <p className='text-red-600'>*</p>{t('應徵資訊管道')}
                        </label>
                        <select name="applicationChannel" className={`ml-10 block border w-52 text-center justify-between text-slate-500 border-gray-300 rounded-md shadow-sm ${inputBgColor}`} onChange={handleChange}>
                            <option value="昱叡電子官網">{t('昱叡電子官網')}</option>
                            <option value="人力銀行網站">{t('人力銀行網站')}</option>
                            <option value="社群媒體">{t('社群媒體')}</option>
                            <option value="員工介紹">{t('員工介紹')}</option>
                            <option value="其他">{t('其他')}</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className={`block ${formLabelFont}`}>{t('身份證號碼')} <p className='text-red-600'>*</p></label>
                        <input type="text" name="idNumber" className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm ${inputBgColor}`} onChange={handleChange} required />
                    </div>
                    <div className="mb-4 flex">
                        <div className="flex-grow mr-2">
                            <label className={`block ${formLabelFont}`}>{t('姓氏/名字')} <p className='text-red-600'>*</p></label>
                            <input type="text" name="name" className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm ${inputBgColor}`} onChange={handleChange} required />
                        </div>
                        <div className="flex-grow ml-2">
                            <label className={`block ${formLabelFont}`}>{t('英文名字')} <p className='text-red-600'>*</p></label>
                            <input type="text" name="englishName" className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm ${inputBgColor}`} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className={`block ${formLabelFont}`}>{t('性別')} <p className='text-red-600'>*</p></label>
                        <div>
                            <label className="inline-flex items-center">
                                <input type="radio" name="gender" className="form-radio" value="male" onChange={handleChange} />
                                <span className="ml-2">{t('男')}</span>
                            </label>
                            <label className="inline-flex items-center ml-6">
                                <input type="radio" name="gender" className="form-radio" value="female" onChange={handleChange} />
                                <span className="ml-2">{t('女')}</span>
                            </label>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className={`block ${formLabelFont}`}>{t('出生日期')} <p className='text-red-600'>*</p></label>
                        <input type="date" name="birthDate" className={`mt-1 block w-full text-slate-500 border border-gray-300 rounded-md shadow-sm ${inputBgColor}`} onChange={handleChange} required />
                    </div>
                    <div className="mb-4">
                        <label className={`block ${formLabelFont}`}>{t('領有殘障手冊')} <p className='text-red-600'><p className='text-red-600'>*</p></p></label>
                        <div>
                            <label className="inline-flex items-center">
                                <input type="radio" name="disability" className="form-radio" value="no" onChange={handleChange} />
                                <span className="ml-2">{t('否')}</span>
                            </label>
                            <label className="inline-flex items-center ml-6">
                                <input type="radio" name="disability" className="form-radio" value="yes" onChange={handleChange} />
                                <span className="ml-2">{t('是')}</span>
                            </label>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className={`block ${formLabelFont}`}>{t('兵役狀況')} <p className='text-red-600'>*</p></label>
                        <div className="flex">
                            <label className="inline-flex items-center">
                                <input type="radio" name="militaryStatus" className="form-radio" value="discharged" onChange={handleChange} />
                                <span className="ml-2">{t('役畢')}</span>
                            </label>
                            <label className="inline-flex items-center ml-4">
                                <input type="radio" name="militaryStatus" className="form-radio" value="notServed" onChange={handleChange} />
                                <span className="ml-2">{t('未役')}</span>
                            </label>
                            <label className="inline-flex items-center ml-4">
                                <input type="radio" name="militaryStatus" className="form-radio" value="serving" onChange={handleChange} />
                                <span className="ml-2">{t('待役')}</span>
                            </label>
                            <label className="inline-flex items-center ml-4">
                                <input type="radio" name="militaryStatus" className="form-radio" value="exempt" onChange={handleChange} />
                                <span className="ml-2">{t('免役')}</span>
                            </label>
                            <label className="inline-flex items-center ml-4">
                                <input type="radio" name="militaryStatus" className="form-radio" value="retired" onChange={handleChange} />
                                <span className="ml-2">{t('屆退伍')}</span>
                            </label>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className={`block ${formLabelFont}`}>{t('聯絡電話')} <p className='text-red-600'>*</p></label>
                        <input type="tel" name="contactNumber" className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm ${inputBgColor}`} onChange={handleChange} required />
                    </div>
                    <div className="mb-4">
                        <label className={`block ${formLabelFont}`}>{t('行動電話')}</label>
                        <input type="tel" name="mobileNumber" className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm ${inputBgColor}`} onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label className={`block ${formLabelFont}`}>{t('聯絡時間/方式')} <p className='text-red-600'>*</p></label>
                        <input type="text" name="contactTime" className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm ${inputBgColor}`} onChange={handleChange} required />
                    </div>
                    <div className="mb-4">
                        <label className={`block ${formLabelFont}`}>{t('電子郵件/信箱')} <p className='text-red-600'>*</p></label>
                        <input type="email" name="email" className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm ${inputBgColor}`} onChange={handleChange} required />
                    </div>
                    <div className="mb-4">
                        <label className={`block ${formLabelFont}`}>{t('聯絡地址')} <p className='text-red-600'>*</p></label>
                        <input type="text" name="address" className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm ${inputBgColor}`} onChange={handleChange} required />
                    </div>
                    <div className="mb-4">
                        <label className={`block ${formLabelFont}`}>{t('可開始上班日')} <p className='text-red-600'>*</p></label>
                        <input type="date" name="startDate" className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm ${inputBgColor}`} onChange={handleChange} required />
                    </div>
                    <div className="mb-4">
                        <label className={`block ${formLabelFont}`}>{t('目前就業狀態')} <p className='text-red-600'>*</p></label>
                        <div>
                            <label className="inline-flex items-center">
                                <input type="radio" name="employmentStatus" className="form-radio" value="employed" onChange={handleChange} />
                                <span className="ml-2">{t('仍在職')}</span>
                            </label>
                            <label className="inline-flex items-center ml-6">
                                <input type="radio" name="employmentStatus" className="form-radio" value="unemployed" onChange={handleChange} />
                                <span className="ml-2">{t('待業中')}</span>
                            </label>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className={`block ${formLabelFont}`}>{t('個人專長')}</label>
                        <textarea name="skills" className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm ${inputBgColor}`} onChange={handleChange}></textarea>
                    </div>
                    <div className="mb-4">
                        <label className={`block ${formLabelFont}`}>{t('上傳履歷 / 自傳')} <p className='text-red-600'>*</p></label>
                        <input type="file" name="resume" className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm ${inputBgColor}`} onChange={handleFileChange} required />
                    </div>
                    <div className="mb-4">
                        <label className={`block ${formLabelFont}`}>{t('希望應徵的職務')}</label>
                        <textarea name="position" className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm ${inputBgColor}`} onChange={handleChange}></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">{t('確定送出')}</button>
                        <button type="reset" className="bg-gray-500 text-white px-4 py-2 rounded-md">{t('取消')}</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormPage;
