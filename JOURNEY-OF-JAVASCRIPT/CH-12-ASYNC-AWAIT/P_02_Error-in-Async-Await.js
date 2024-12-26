// * Function to handle file downloading
function downloadFile(url) {
    return new Promise(function executor(resolve, reject) {
        console.log("Starting download from:", url);
        setTimeout(() => {
            console.log("Download completed");
            const fileName = "Dora.mp4";
            reject(fileName);
        }, 5000);
    });
}

// * Async function to execute the workflow
async function executeWorkflow() {
    console.log("Started Execution In Async Function");

    try {
        const downloadedFile = await downloadFile("https://www.meta.com");
        console.log("Downloaded file:", downloadedFile);
    }
    catch (err) {
        console.log("Error occured in download", err);
    }
    finally {
        console.log("Workflow completed successfully!");
    }
}

executeWorkflow();