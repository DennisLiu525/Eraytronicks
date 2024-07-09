import React from 'react';
import { useTranslation } from 'react-i18next';
import { useColor } from '../context/ColorContext';

const FormPage: React.FC = () => {
    const { t, i18n } = useTranslation();
    const { isBlack } = useColor();
    const commonStyles = isBlack ? 'bg-black text-white' : 'bg-white text-black';
    const formLabelFont = isBlack? 'text-white' : 'text-slate-700';

    return (
        <div className={`mt-40 border-2 container mx-auto p-4 ${commonStyles}`}>
            <h1 className="text-3xl font-bold mb-4">加入昱叡電子</h1>
            <div className=' text-gray-500'>
                <p>您好，歡迎填寫履歷資料。</p>
                <p className='flex'>紅色 <p className="text-red-500">*</p> 符號欄位為必填。另外，也請您將已準備好的履歷/自傳資料檔案上傳。</p>
                <p>本公司基於人才招募的目的，在一定時間內保留您應徵於附於昱叡電子人才資料庫，並僅供內部徵才使用</p>
                <p>有關請求停止蒐集、處理、利用或刪除您的資料，請與本公司HR聯絡</p>
                <p>Tel:03-4201107</p>
                <p>Email:billts.eraytroniks@gmail.com</p>
            </div>
            <h1 className='mt-7 text-4xl font-bold'>基本資料</h1>
            <div className=' border-2 h-1'></div>
            <form className='mt-3 font-bold'>
                <div className="mb-4 flex">
                    <label className={`flex ${formLabelFont}`}>
                        <p className='text-red-600'>*</p>應徵資訊管道
                    </label>
                    <select className="ml-10 block border w-52 text-center justify-between text-slate-500 border-gray-300 rounded-md shadow-sm">
                        <option value="昱叡電子官網">昱叡電子官網</option>
                        <option value="人力銀行網站">人力銀行網站</option>
                        <option value="社群媒體">社群媒體</option>
                        <option value="員工介紹">員工介紹</option>
                        <option value="其他">其他</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className={`block ${formLabelFont}`}>身份證號碼 *</label>
                    <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
                </div>
                <div className="mb-4 flex">
                    <div className="flex-grow mr-2">
                        <label className={`block ${formLabelFont}`}>姓氏/名字 *</label>
                        <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
                    </div>
                    <div className="flex-grow ml-2">
                        <label className={`block ${formLabelFont}`}>英文名字 *</label>
                        <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
                    </div>
                </div>
                <div className="mb-4">
                    <label className={`block ${formLabelFont}`}>性別 *</label>
                    <div>
                        <label className="inline-flex items-center">
                            <input type="radio" className="form-radio" name="gender" value="male" />
                            <span className="ml-2">男</span>
                        </label>
                        <label className="inline-flex items-center ml-6">
                            <input type="radio" className="form-radio" name="gender" value="female" />
                            <span className="ml-2">女</span>
                        </label>
                    </div>
                </div>
                <div className="mb-4">
                    <label className={`block ${formLabelFont}`}>出生日期 *</label>
                    <input type="date" className="mt-1 block w-full text-slate-500 border border-gray-300 rounded-md shadow-sm" />
                </div>
                <div className="mb-4">
                    <label className={`block ${formLabelFont}`}>領有殘障手冊 *</label>
                    <div>
                        <label className="inline-flex items-center">
                            <input type="radio" className="form-radio" name="disability" value="no" />
                            <span className="ml-2">否</span>
                        </label>
                        <label className="inline-flex items-center ml-6">
                            <input type="radio" className="form-radio" name="disability" value="yes" />
                            <span className="ml-2">是</span>
                        </label>
                    </div>
                </div>
                <div className="mb-4">
                    <label className={`block ${formLabelFont}`}>兵役狀況 *</label>
                    <div className="flex">
                        <label className="inline-flex items-center">
                            <input type="radio" className="form-radio" name="militaryStatus" value="discharged" />
                            <span className="ml-2">役畢</span>
                        </label>
                        <label className="inline-flex items-center ml-4">
                            <input type="radio" className="form-radio" name="militaryStatus" value="notServed" />
                            <span className="ml-2">未役</span>
                        </label>
                        <label className="inline-flex items-center ml-4">
                            <input type="radio" className="form-radio" name="militaryStatus" value="serving" />
                            <span className="ml-2">待役</span>
                        </label>
                        <label className="inline-flex items-center ml-4">
                            <input type="radio" className="form-radio" name="militaryStatus" value="exempt" />
                            <span className="ml-2">免役</span>
                        </label>
                        <label className="inline-flex items-center ml-4">
                            <input type="radio" className="form-radio" name="militaryStatus" value="retired" />
                            <span className="ml-2">屆退伍</span>
                        </label>
                    </div>
                </div>
                <div className="mb-4">
                    <label className={`block ${formLabelFont}`}>聯絡電話 *</label>
                    <input type="tel" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
                </div>
                <div className="mb-4">
                    <label className={`block ${formLabelFont}`}>行動電話</label>
                    <input type="tel" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
                </div>
                <div className="mb-4">
                    <label className={`block ${formLabelFont}`}>聯絡時間/方式 *</label>
                    <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
                </div>
                <div className="mb-4">
                    <label className={`block ${formLabelFont}`}>電子郵件/信箱 *</label>
                    <input type="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
                </div>
                <div className="mb-4">
                    <label className={`block ${formLabelFont}`}>聯絡地址 *</label>
                    <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
                </div>
                <div className="mb-4">
                    <label className={`block ${formLabelFont}`}>可開始上班日 *</label>
                    <input type="date" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
                </div>
                <div className="mb-4">
                    <label className={`block ${formLabelFont}`}>目前就業狀態 *</label>
                    <div>
                        <label className="inline-flex items-center">
                            <input type="radio" className="form-radio" name="employmentStatus" value="employed" />
                            <span className="ml-2">仍在職</span>
                        </label>
                        <label className="inline-flex items-center ml-6">
                            <input type="radio" className="form-radio" name="employmentStatus" value="unemployed" />
                            <span className="ml-2">待業中</span>
                        </label>
                    </div>
                </div>
                <div className="mb-4">
                    <label className={`block ${formLabelFont}`}>個人專長</label>
                    <textarea className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"></textarea>
                </div>
                <div className="mb-4">
                    <label className={`block ${formLabelFont}`}>上傳履歷 / 自傳 *</label>
                    <input type="file" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
                </div>
                <div className="mb-4">
                    <label className={`block ${formLabelFont}`}>希望應徵的職務</label>
                    <textarea className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"></textarea>
                </div>
                <div className="flex justify-end">
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">確定送出</button>
                    <button type="reset" className="bg-gray-500 text-white px-4 py-2 rounded-md">取消</button>
                </div>
            </form>
        </div>
    );
};

export default FormPage;
