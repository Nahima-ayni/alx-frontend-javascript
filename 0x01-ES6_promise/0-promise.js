export default function getResponseFromAPI() {
    return new Promise((resolve) => {
        setTimeout(() => {
	    resolve('success');
        }, 3000);
    })
}
