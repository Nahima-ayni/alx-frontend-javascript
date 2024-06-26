export default function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('So, what brings you here?');
	    resolve('success');
        }, 3000);
    })
}
