/* eslint-disable jsx-a11y/anchor-is-valid */
// src/CustomerForm.js
import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from 'react-router-dom';
import trusty from '../Assets/trusty.jpeg';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Import the Firestore database

const CustomerForm = () => {
  
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [isChecked, setIsChecked] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [carModel, setCarModel] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isChecked) {
      alert('전체 동의에 클릭해 주세요.');
      return;
    }
    alert('견적 문의가 보내졌습니다. 빨리 연락드리겠습니다.');

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setErrors({});
      // Save data to Firebase
      try {
        await addDoc(collection(db, 'customers'), {
          name,
          phone,
          carModel
        });
        console.log('Customer data saved to Firebase');
      } catch (error) {
        console.error('Error saving customer data: ', error);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{11}$/.test(phone)) {
      newErrors.phone = '올바른 핸드폰 번호는 11자리입니다.';
    }
    if (!carModel) newErrors.carModel = 'Car model is required';
    return newErrors;
  };

  return (
    <div className="form-section-container">
      <div className="form-section-image-container">
        <img className="csj-image" src={trusty} alt="" />
      </div>
      <div className="customer-form-container">
        <h3>빠른 견적 문의</h3>
        {submitted && <p className="success-message">Form submitted successfully!</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>이름:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div>
            <label>전화 번호:</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>
          <div>
            <label>원하는 차종:</label>
            <input
              type="text"
              value={carModel}
              onChange={(e) => setCarModel(e.target.value)}
              required
            />
            {errors.carModel && <p className="error">{errors.carModel}</p>}
          </div>
          <div>
            <Checkbox {...label} defaultChecked />서비스 이용 약관<br />
            <Checkbox {...label} defaultChecked />개인정보 수집 및 활용 동의<br />
            <Checkbox {...label} defaultChecked />개인 정보 이용 및 위탁 동의<br />
            <label>
              <Checkbox
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />전체 동의
            </label>
          </div>
          <a onClick={() => { navigate('/Termsconditions'); }} className='reading'>약관과 동의서 읽기</a>
          <button type="submit">견적 문의 하기</button>
        </form>
      </div>
    </div>
  );
};

export default CustomerForm;
