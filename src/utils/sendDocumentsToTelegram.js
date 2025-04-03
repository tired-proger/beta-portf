const sendDocumentsToTelegram = async (documents, name) => {

    let url = "https://api.telegram.org/bot7590653314:AAE_Av2jifsaMLhgwEUmm8Xn1InJwRK1yCQ/sendDocument";

    const errorFileList = [];

    for (const document of documents) {

        const { file, title } = document;
        const formData = new FormData();
        formData.append('chat_id', -1002464061731);
        formData.append('document', file);
        formData.append('caption', name);

        try {

            const response = await fetch(url, { method: "POST", body: formData });
            if (!response.ok) throw new Error();
            errorFileList.push({ success: true });

        } catch(e) {

            errorFileList.push({ success: false, file: title });

        }

    }

    return errorFileList;

}

export { sendDocumentsToTelegram };