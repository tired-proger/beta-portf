const sendMessageToTelegram = async (getOrderMessage, inputsData, selectedOption) => {

    try {

        const response = await fetch("https://api.telegram.org/bot7590653314:AAE_Av2jifsaMLhgwEUmm8Xn1InJwRK1yCQ/sendMessage", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chat_id: -1002464061731,
                text: getOrderMessage(inputsData, selectedOption),
                parse_mode: "HTML"
            })
        });

        if (!response.ok) throw new Error();

        return { error: false }

    } catch {
        return { error: {
            name: "Ошибка отправки сообщения",
            description: "Повторите попытку отправки сообщения и файлов после перезагрузки страницы или чистки кэша"
        }}
    } 

}

export { sendMessageToTelegram };