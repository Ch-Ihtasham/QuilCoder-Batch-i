import React from 'react'
import { useId } from 'react'
export const InputBox = (
    {
        label,
        amount,
        onAmountChange,
        amountDisabled = false,
        options = [],
        onCurrencyChnage,
        selectCurrency,
    }
) => {
    const inputId = useId()
    return (
        <div className='px-2 py-4 flex gap-10 border border-black w-max'>
            <div className='flex gap-2 flex-col'>
                <label htmlFor={inputId}>{label}</label>
                <input type="number"
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    placeholder='Enter Amount'
                    id={inputId}
                    className='border'
                    disabled={amountDisabled}
                />
            </div>
            <div className='flex gap-2 flex-col'>
                <div>Select Currency</div>
                <select id="" value={selectCurrency}
                    onChange={(e) => onCurrencyChnage && onCurrencyChnage(e.target.value)}
                >
                    {
                        options.map((currency) => (
                            <option key={currency} value={currency}>{currency}</option>
                        ))
                    }

                </select>

            </div>

        </div>
    )
}
