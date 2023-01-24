//get Data
let fetchButton = document.getElementById('buttonInput');
let input = document.getElementById('inputIP');
const containerDetails = document.getElementById('box');
const allTheInformation = document.getElementById('box');
fetchButton.addEventListener('click', () => {
	let searchIP = input.value;
	fetch(
		`https://geo.ipify.org/api/v2/country,city?apiKey=at_RD84R7mq7FUiqOYf7JLrEr3qTq1Gh&ipAddress=${searchIP}`
	)
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				alert("Sorry, We can't find this address, please try again!");
				throw new Error(response.statusText);
			}
		})
		.then((data) => {
			// const fetchDataDefault = {
			// 	IP: data.ip,
			// 	location: `${data.location.city}, ${data.location.country} ${data.location.geonameId}`,
			// 	TimeZone: `UTC ${data.location.timezone}`,
			// 	ISP: data.isp,
			// };
			// defaultFu(fetchDataDefault);
			console.log(data);
			containerDetails.innerHTML = '';
			const location = containerDetails.appendChild(
				document.createElement('div')
			);
			const IPAddress = containerDetails.appendChild(
				document.createElement('div')
			);
			const timeZone = containerDetails.appendChild(
				document.createElement('div')
			);
			const isp = containerDetails.appendChild(document.createElement('div'));

			location.id = 'location';
			IPAddress.id = 'IPAddresslocation';
			timeZone.id = 'timeZonelocation';
			isp.id = 'isplocation';
			const lineFirst = document.createElement('hr');
			const lineSecond = document.createElement('hr');
			const lineThird = document.createElement('hr');
			lineFirst.className = 'line1';
			lineSecond.className = 'line2';
			lineThird.className = 'line3';
			location.innerHTML =
				'<div class = "title">location: </div>' +
				`<span>${data.location.city}, ${data.location.country}, ${data.location.geonameId}</span>`;
			IPAddress.innerHTML =
				'<div class = "title" > IP Address: </div>' + `<span>${data.ip}</span>`;
			timeZone.innerHTML =
				'<div class ="title"> Time Zone: </div>' +
				`<span>${data.location.timezone}</span>`;
			isp.innerHTML =
				'<div class = "title">ISP: </div> ' + `<span>${data.isp}</span>`;

			containerDetails.appendChild(location);
			containerDetails.appendChild(lineFirst);
			containerDetails.appendChild(IPAddress);
			containerDetails.appendChild(lineSecond);
			containerDetails.appendChild(timeZone);
			containerDetails.appendChild(lineThird);
			containerDetails.appendChild(isp);
		});
});

// .catch((error) => {
// 	debugger;

// 	containerDetails.innerHTML = error.message;
// });

// const defaultFu = () => {
// 	setInterval(() => {
// 		const inputValue = input.value;
// 		if (!inputValue) {
// 			containerDetails.innerHTML = '';
// 			const defaultInformation = {
// 				IP: '',
// 				location: ``,
// 				TimeZone: ``,
// 				ISP: '',
// 			};
// 		}
// 	}, 1000);
// };
// const dataForModal = data.map((obj) => {
// 	debugger;
// 	return {
// 		IPAddress: obj.ip,
// 		location: obj.location,
// 		timeZone: obj.location.timezone,
// 		isp: obj.isp,
// 	};
// });
// console.log(dataForModal);
// return dataForModal;
// openModal
// const detailsContainer = document.getElementsByClassName('modal-windo')[0];
// buttonInput.addEventListener('click', () => openModalnformation());

// let openModalnformation = (index) => {
// 	let i = 0;
// 	let modal = document.getElementById('myModal');
// 	let dataIP = document.createElement('div');
// 	modal.style.display = 'block';
// 	// fillTheData
// };
// // closeModal
// let closeBtn = document.getElementById('close-modal');
// console.log(closeBtn);
// closeBtn.addEventListener('click', (event) => closeModal());

// let closeModal = () => {
// 	let modal = document.getElementById('myModal');
// 	modal.style.display = 'none';

// 	// cleanup
// 	detailsContainer.innerHTML = '';
// };
// // */