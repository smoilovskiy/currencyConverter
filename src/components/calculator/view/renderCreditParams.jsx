import React, { useState, createRef } from 'react';
import '../calculator.scss';

const CREDIT_COST_INIT = 2000000;
const MATERNAL_CAPITAL = 470000;
const ORDER_NUMBER_INIT = 10;


function RenderCreditParams(props) {

  const [creditCost, setCreditCost] = useState(CREDIT_COST_INIT);
  const [active, setApplyFormActive] = useState({ display: "none" });

  const [initialFeeValue, setInitialFeeValue] = useState(creditCost / 10);
  const [loanTermsValue, setLoanTermsValue] = useState(props.content.loanTermsValueMin);
  const [interestRate, setInterestRate] = useState(props.content.interestRateInit);

  const inputCreditCost = createRef();
  const inputInitialFee = createRef();
  const inputLoanTerms = createRef();


  function handleCreditCostInput() {
    setCreditCost(+inputCreditCost.current.value)
  }

  function useMaternalCapital(e) {
    e.target.checked ? setCreditCost(creditCost - MATERNAL_CAPITAL) : setCreditCost(creditCost + MATERNAL_CAPITAL);
  }

  function handleInitialFeeChange() {
    initialFeeValue < 300000 ? setInterestRate(props.content.interestRateInit) : setInterestRate(props.content.interestRateMin);
    setInitialFeeValue(+inputInitialFee.current.value)

  }

  function handleLoanTermsChange() {
    setLoanTermsValue(+inputLoanTerms.current.value)
  }

  function decreaseCreditCost() {
    setCreditCost(creditCost - 100000)
  }

  function increaseCreditCost() {
    setCreditCost(creditCost + 100000)
  }

  function applyFormActive() {
    setApplyFormActive({ display: "block" })
  }

  const creditParams =
    <div className='mortgage-credit-params'>
      <p className='calculator__steps-text'>Шаг 2. Введите параметры кредита</p>

      <p className='credit-params-subtitle'>{props.content.creditCostTitle}</p>
      <div className='credit-cost-container-wrapper'>
        <img className='minus-img' src='./img/icon/minus.svg' alt='minus-img' onClick={decreaseCreditCost}></img>
        <div className='credit-cost-container'>
          <input className='credit-cost' ref={inputCreditCost} value={creditCost} onChange={handleCreditCostInput} />
          <p className='credit-cost-currency'> рублей</p>
        </div>
        <img className='plus-img' src='./img/icon/plus.svg' alt='minus-img' onClick={increaseCreditCost}></img>
      </div>
      <p className='credit-cost-range'>От {props.content.creditCostMin.toLocaleString('ru')}  до {props.content.creditCostMax.toLocaleString('ru')} рублей</p>
      <p className='credit-params-subtitle'>Первоначальный взнос</p>
      <div className='initial-fee-container'>
        <div className='credit-cost-container'>
          <input className='credit-cost'
            ref={inputInitialFee}
            value={initialFeeValue}
            onChange={({ target: { value: inputInitialFee } }) => {
              setInitialFeeValue(inputInitialFee);
            }}
          />

          <p className='credit-cost-currency'> рублей</p>
        </div>
      </div>

      <div className='range-slider-container'>
        <input
          type="range"
          ref={inputInitialFee}
          className="range-slider"

          min={creditCost / props.content.initialFeeValueMinPercent}
          step={creditCost / 20}
          max={creditCost}
          value={initialFeeValue}
          onChange={handleInitialFeeChange}
        />
        <span className='range-slider-marker-min'>{props.content.initialFeeValueMinPercent} %</span>
      </div>

      <p className='credit-params-subtitle'>Срок кредитования</p>

      <div className='initial-fee-container'>
        <div className='credit-cost-container'>
          <input
            className='loan-terms'
            ref={inputLoanTerms}
            value={loanTermsValue}
            onChange={({ target: { value: inputLoanTerms } }) => {
              setLoanTermsValue(inputLoanTerms);
            }}
          />

          <p className='loan-terms-years'> лет</p>
        </div>
      </div>

      <div className='range-slider-container'>
        <input
          ref={inputLoanTerms}
          type="range"
          className="range-slider"
          min={props.content.loanTermsValueMin}
          max={props.content.loanTermsValueMax}
          value={loanTermsValue}
          onChange={handleLoanTermsChange}
        />
        <span className='range-slider-marker-min'>{props.content.loanTermsValueMin} лет</span>
        <span className='range-slider-marker-max'>{props.content.loanTermsValueMax} лет</span>
      </div>

      <div className='chekbox-container'>
        <input
          type="checkbox"
          className="credit-params-checkbox"
          onChange={useMaternalCapital}
        />
        <p className="checkbox-container-text">Использовать материнский капитал</p>
      </div>

      <div className='our-offer'>
        <div className='our-offer__inner'>
          <div className='our-offer__inner-left'>
            <p className='our-offer__title'>Наше предложение</p>
            <p className='amount-value'>{creditCost.toLocaleString('ru')} рублей</p>
            <p className='amount-subtitle'>Сумма кредита</p>
            <p className='amount-value'>{(creditCost / 5).toLocaleString('ru')} рублей</p>
            <p className='amount-subtitle'>Ежемесячный платеж</p>
          </div>

          <div className='our-offer__inner-right'>
            <p className='amount-value'>{interestRate} %</p>
            <p className='amount-subtitle'>Процентная ставка</p>
            <p className='amount-value'>{(creditCost / 40).toLocaleString('ru')} рублей</p>
            <p className='amount-subtitle'>Необходимый доход</p>
          </div>

          <a className='our-offer__link-bttn' href='##' onClick={applyFormActive}>Оформить заявку</a>

        </div>
      </div>
      <div className='apply-form-container' style={active}>

        <div className='apply-form__inner'>
          <div className='apply-form__title-container'>
            <p className='apply-form__title'>Шаг 3. Оформление заявки</p>
          </div>
          <form id='apply-form'>
            <div className='apply-form__data'>
              <p className='apply-form__data-title'>Номер заявки</p>
              <label className='apply-form__data-value'>{`№ 00${ORDER_NUMBER_INIT}`}</label>
              <input type="hidden" name='order-number' value={ORDER_NUMBER_INIT} />
            </div>
            <div className='apply-form__data'>
              <p className='apply-form__data-title'>Цель кредита</p>
              <label className='apply-form__data-value'>{props.content.targetCredit}</label>
              <input type="hidden" name='credit-target' value={props.content.targetCredit} />
            </div>
            <div className='apply-form__data'>
              <p className='apply-form__data-title'>{props.content.creditCostTitle}</p>
              <label className='apply-form__data-value'>{creditCost.toLocaleString('ru')} рублей</label>
              <input type="hidden" name='credit-cost' value={creditCost} />
            </div>
            <div className='apply-form__data'>
              <p className='apply-form__data-title'>Первоначальный взнос</p>
              <label className='apply-form__data-value'>{initialFeeValue.toLocaleString('ru')} рублей</label>
              <input type="hidden" name='initial-fee' value={initialFeeValue} />
            </div>
            <div className='apply-form__data'>
              <p className='apply-form__data-title'>Срок кредитования</p>
              <label className='apply-form__data-value'>{loanTermsValue} лет</label>
              <input type="hidden" name='loan-terms' value={loanTermsValue} />
            </div>

            <input className='apply-form__customer-name' type="text" name='customer-name' placeholder='ФИО' />
            <div className='apply-form__customer-contacts'>
              <input className='apply-form__customer-phone' type="tel" name='customer-phone' placeholder='Телефон' />
              <input className='apply-form__customer-email' type="mailto" name='customer-email' placeholder='E-mail' />
            </div>

            <button type='submit' className='apply-form__submit-button'>Отправить</button>
          </form>
        </div>
      </div>
    </div>

  return creditParams
}

export default RenderCreditParams
