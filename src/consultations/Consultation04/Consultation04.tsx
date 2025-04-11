import { ChangeEvent, useState } from "react";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import './styles.css'

function Consultation04() {
  const [invoiceAmount, setInvoiceAmount] = useState<string>('');
  const [showTotalPrice, setShowTotalPrice] = useState<boolean>(false);

  const onChangeAmount = (event: ChangeEvent<HTMLInputElement>) => {
    setInvoiceAmount(event.target.value)
  }
  const showTotalPriceHandler = () => {
    setShowTotalPrice(!showTotalPrice)
  }
  console.log(showTotalPrice);
  return (
    <div className="consultation04-container">
      <Input name="invoice_amount" onChange={onChangeAmount} value={invoiceAmount} />
      <Button name='SHOW FULL PRICE' onClick={showTotalPriceHandler} />
      {showTotalPrice &&
        <div>
          {invoiceAmount}
        </div>}
    </div>
  )
}

export default Consultation04