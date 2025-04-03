function getOrderMessage(inputsData, selectedOption) {

    const { name, telegram, message } = inputsData;

    return (
`
//////////////////////////////////////

✨<b>ПРИШЁЛ НОВЫЙ ЗАКАЗ!</b>

✨Информация о заказчике:
🟢Отправитель: 
<code>${name.value}</code>

🟢Телеграм: 
<code>@${telegram.value}</code>

🟢Тип работы: 
<b>${selectedOption ? selectedOption.label : "Не выбрано"}</b>

🟢Сообщение: 
${message.value}

//////////////////////////////////////
`
    );
}

export {getOrderMessage};