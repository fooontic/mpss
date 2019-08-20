const clusterEventsList = document.querySelector('.main-page__cluster-events');
const scenarioEventsList = document.querySelector('.main-page__scenario-events');

let centralEventsItems = document.querySelectorAll('.central-event');
let clusterEventsItems = document.querySelectorAll('.cluster-event');
let scenarioEventsItems = document.querySelectorAll('.scenario-event');

const openClusterListHandler = function (evt) {
	for ( var i = 0; i < centralEventsItems.length; i++ ) {
		centralEventsItems[i].classList.remove('central-event_state_active');
	}

	let clickedElement = evt.currentTarget;
	clickedElement.classList.add('central-event_state_active');
	clusterEventsList.classList.remove('main-page__cluster-events_state_closed');
	clusterEventsList.classList.add('main-page__cluster-events_state_opened');
}

const openScenarioListHandler = function (evt) {
	for ( var i = 0; i < clusterEventsItems.length; i++ ) {
		clusterEventsItems[i].classList.remove('cluster-event_state_active');
	}

	let clickedElement = evt.currentTarget;
	clickedElement.classList.add('cluster-event_state_active');
	scenarioEventsList.classList.remove('main-page__scenario-events_state_closed');
	scenarioEventsList.classList.add('main-page__scenario-events_state_opened');
}

const listenToCentralItems = function () {
	for ( var i = 0; i < centralEventsItems.length; i++ ) {
		centralEventsItems[i].addEventListener('click', openClusterListHandler)
	}
};

const listenToClusterItems = function () {
	for ( var i = 0; i < clusterEventsItems.length; i++ ) {
		clusterEventsItems[i].addEventListener('click', openScenarioListHandler)
	}
};

listenToCentralItems();
listenToClusterItems();
