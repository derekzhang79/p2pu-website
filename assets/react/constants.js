export const LEARNING_CIRCLES_LIMIT = 11;

export const SEARCH_PROPS = {
  learningCircles: {
    filters: ['location', 'topics', 'meetingDays'],
    placeholder: 'Search by city, organization, topic, and more... ',
    resultsSubtitle: 'Sign up below for a learning circle in your area, or create your own!'
  },
  courses: {
    filters: ['topics'],
    placeholder: 'Search by title, subject, description, and more... ',
    resultsSubtitle: 'Select a course below or create your own!'
  }
};

export const MEETING_DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
]

export const COURSE_CATEGORIES = [
  'Geography',
  'Economics',
  'Social Sciences',
  'Humanities',
  'Languages'
]

export const API_ENDPOINTS = {
  learningCircles: {
    baseUrl: 'https://learningcircles.p2pu.org/api/learningcircles/?',
    searchParams: ['q', 'topics', 'weekdays', 'latitude', 'longitude', 'distance', 'active', 'limit', 'offset', 'city', 'signup']
  },
  courses: {
    baseUrl: 'https://learningcircles.p2pu.org/api/courses/?',
    searchParams: ['q', 'topics']
  }
}