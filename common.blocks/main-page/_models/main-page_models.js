const clusterEventsList = document.querySelector('.main-page__cluster-events');
const scenarioEventsList = document.querySelector('.main-page__scenario-events');
const scenarioEmpty = document.querySelector('.scenario-empty');
const scenarioEmptyText = scenarioEmpty.querySelector('.scenario-empty__text');
const scenarioEmptyLoader = scenarioEmpty.querySelector('.scenario-empty__loader');
const emptySection = document.querySelector('.main-page__empty-section');

let centralEventsItems = document.querySelectorAll('.central-event');
let clusterEventsItems = document.querySelectorAll('.cluster-event');
let scenarioEventsItems = document.querySelectorAll('.scenario-event');

const showClusterList = () => {
	clusterEventsList.classList.add('main-page__cluster-events_show-list')
}

const showScenarioList = () => {
	scenarioEventsList.classList.add('main-page__scenario-events_show-list');
	scenarioEventsList.classList.add('main-page__scenario-events_animated');
	setTimeout( () => {
		scenarioEventsList.classList.remove('main-page__scenario-events_animated');
	}, 2000);
}

const hideScenarioList = () => {
	scenarioEventsList.classList.remove('main-page__scenario-events_show-list')
}


const toggleClusterList = () => {
	clusterEventsList.classList.remove('main-page__cluster-events_show-list');
	setTimeout(showClusterList, 150);
}

const toggleScenarioList = () => {
	scenarioEventsList.classList.remove('main-page__scenario-events_show-list');
	setTimeout(showScenarioList, 150);
}

const showLoader = () => {
	scenarioEmptyText.style.display = 'none';
	scenarioEmptyLoader.style.display = 'block';
}

const hideLoader = () => {
	scenarioEmptyText.style.display = 'block';
	scenarioEmptyLoader.style.display = 'none';
}


const openEventsListHandler = (evt) => {
	let clickedElement = evt.currentTarget;

	for ( var i = 0; i < centralEventsItems.length; i++ ) {
		centralEventsItems[i].classList.remove('central-event_state_active');
	}
	clickedElement.classList.add('central-event_state_active');

	emptySection.classList.remove('main-page__empty-section_state_visible');

	clusterEventsList.classList.remove('main-page__cluster-events_state_closed');
	clusterEventsList.classList.add('main-page__cluster-events_state_opened');
	scenarioEventsList.classList.remove('main-page__scenario-events_state_closed');
	scenarioEventsList.classList.add('main-page__scenario-events_state_opened');

	toggleClusterList();
	hideScenarioList();
	hideLoader();
}


const showScenarioListHandler = (evt) => {
	let clickedElement = evt.currentTarget;

	for ( var i = 0; i < clusterEventsItems.length; i++ ) {
		clusterEventsItems[i].classList.remove('cluster-event_state_active');
	}
	clickedElement.classList.add('cluster-event_state_active');

	showLoader();
	toggleScenarioList();
}


const listenToCentralItems = () => {
	for ( var i = 0; i < centralEventsItems.length; i++ ) {
		centralEventsItems[i].addEventListener('click', openEventsListHandler)
	}
};

const listenToClusterItems = () => {
	for ( var i = 0; i < clusterEventsItems.length; i++ ) {
		clusterEventsItems[i].addEventListener('click', showScenarioListHandler)
	}
};

listenToCentralItems();
listenToClusterItems();
