import React, { useState } from 'react';
import { Fragment } from "react";
import RenderCreditParams from './view/renderCreditParams';
import './calculator.scss';

function Calculator() {

  const step1 = 'Шаг 1. Цель кредита';

  const mortgageCredit = 'Ипотечное кредитование';
  const carCredit = 'Автомобильное кредитование';
  const creditTargetTitle = 'Выберите цель кредита';

  const [expanded, setExpanded] = useState(false);
  const [creditType, setCreditType] = useState(creditTargetTitle);

  function handlerExpandMenu() {
    setExpanded(!expanded)
  }

  function handlerMortgageCredit() {
    setExpanded(!expanded);
    setCreditType(mortgageCredit);
  }

  function handlerCarCredit() {
    setExpanded(!expanded)
    setCreditType(carCredit);
  }

  const creditInitialValues = [
    {
      creditCostTitle: 'Стоимость недвижимости',
      targetCredit: 'Ипотека',
      creditCostMin: 1200000,
      creditCostMax: 25000000,
      loanTermsValueMin: 5,
      loanTermsValueMax: 30,
      initialFeeValueMinPercent: 10,
      interestRateInit: 9.4,
      interestRateMin: 8.5,
    },
    {
      creditCostTitle: 'Стоимость автомобиля',
      targetCredit: 'Автомобиль',
      creditCostMin: 500000,
      creditCostMax: 5000000,
      loanTermsValueMin: 1,
      loanTermsValueMax: 5,
      initialFeeValueMinPercent: 20,
      interestRateInit: 16,
      interestRateMin: 15,
    }
  ]

  const creditSelect = [
    <div className='credit-selector-condensed' onClick={handlerExpandMenu}>
      <p className='credit-selector__title'>{creditType}</p>
      <img className='credit-selector__arrow'
        src='./img/icon/arrow-down.svg'
        alt='credit-selector-arrow'>
      </img>
    </div>,
    <div className='credit-selector-expanded-container' onClick={handlerExpandMenu}>
      <div className='credit-selector-expanded'>
        <p className='credit-selector__title'>{creditType}</p>
        <img className='credit-selector__arrow'
          src='./img/icon/arrow-up.svg'
          alt='credit-selector-arrow'>
        </img>
      </div>
      <div className='mortgage-credit-lending' onClick={handlerMortgageCredit}>
        <p className='credit-selector__title--expanded'>{mortgageCredit}</p>
      </div>
      <div className='car-credit-lending' onClick={handlerCarCredit}>
        <p className='credit-selector__title--expanded' >{carCredit}</p>
      </div>
    </div>
  ];


  return (
    <Fragment>
      <div className='calculator__container'>
        <h3 className='calculator__title'>Кредитный калькулятор</h3>
        <p className='calculator__steps-text'>{step1}</p>
        {expanded === false ? creditSelect[0] : creditSelect[1]}
        {creditType === creditTargetTitle ? null :
          creditType === mortgageCredit ?
            <RenderCreditParams content={creditInitialValues[0]} /> :
            <RenderCreditParams content={creditInitialValues[1]} />}

      </div>
      {/* <RefDemo /> */}
    </Fragment>
  );
};

export default Calculator