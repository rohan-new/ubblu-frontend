import { WORKSPACEID } from 'common/utils/helper';

export const API = {
  // API_ENDPOINT: 'https://backend.ubblu.ga/api/v1',
  BASE_BACKEND_URL: 'https://backend.ubblu.ga',
   API_ENDPOINT: 'http://localhost:8080/api/v1',
  //  BASE_BACKEND_URL:'http://localhost:8080/',
  BASE_FRONTEND_URL: 'http://ubblu.ga',
  //BASE_FRONTEND_URL: 'http://ec2-13-233-33-237.ap-south-1.compute.amazonaws.com',
  DEV_BASE_BACKEND_URL: 'http://localhost:8080',
  DEV_BASE_FRONTEND_URL: 'http://localhost:3010',
  LOCAL_API_ENDPOINT: 'http://localhost:8080/api/v1',
  WSS: 'http://13.233.73.120:8080',
  AVATAR: 'https://ui-avatars.com/api/',
  SOCKET_URL: 'https://backend.ubblu.ga',
  DEV_SOCKET_URL: 'http://localhost:8000',
};

export const DOMAIN = 'ubblu.com';

export const ACTION = {
  SIGNIN_WORKSPACE: 'SIGNIN_WORKSPACE',
  SIGNIN_WORKSPACE_RESPONSE: 'SIGNIN_WORKSPACE_RESPONSE',
  LOGIN_USER: 'LOGIN_USER',
  LOGIN_USER_SUCCESS: 'LOGIN_USER_SUCCESS',
  LOGIN_USER_ERROR: 'LOGIN_USER_ERROR',
  LOGOUT_USER: 'LOGOUT_USER',
  CHANGE_PASSWORD: 'CHANGE_PASSWORD',
  CHANGE_PASSWORD_SUCCESS: 'CHANGE_PASSWORD_SUCCESS',
  CHANGE_PASSWORD_ERROR: 'CHANGE_PASSWORD_ERROR',
  GET_USER_PROFILE: 'GET_USER_PROFILE',
  CLEAR_SESSION: 'CLEAR_SESSION',
  SIGNUP_1: 'SIGNUP_1',
  SIGNUP_1_SUCCESS: 'SIGNUP_1_SUCCESS',
  SIGNUP_1_ERROR: 'SIGNUP_1_ERROR',
  FORGOT_PASSWORD: 'FORGOT_PASSWORD',
  FORGOT_PWD_SUCCESS: 'FORGOT_PWD_SUCCESS',
  FORGOT_PWD_ERROR: 'FORGOT_PWD_ERROR',
  SET_PASSWORD: 'SET_PASSWORD',
  SET_PASSWORD_SUCCESS: 'SET_PASSWORD_SUCCESS',
  SET_PASSWORD_ERROR: 'SET_PASSWORD_ERROR',
  SIGNUP_2: 'SIGNUP_2',
  SIGNUP_2_RESPONSE: 'SIGNUP_2_RESPONSE',
  SIGNUP_3: 'SIGNUP_3',
  SIGNUP_3_RESPONSE: 'SIGNUP_3_RESPONSE',
  SIGNUP_4: 'SIGNUP_4',
  SIGNUP_4_RESPONSE: 'SIGNUP_4_RESPONSE',
  SIGNUP_5: 'SIGNUP_5',
  SIGNUP_5_RESPONSE: 'SIGNUP_5_RESPONSE',
  UPDATE_USER_PROFILE: 'UPDATE_USER_PROFILE',
  UPDTAE_USER_PROFILE_SUCCESS: 'UPDTAE_USER_PROFILE_SUCCESS',
  //user
  GET_USER_BY_ID: 'GET_USER_BY_ID',
  GET_USER_BY_ID_RESPONSE: 'GET_USER_BY_ID_RESPONSE',
  //Inbox Actions
  GET_USER_PROFILE_SUCCESS: 'GET_USER_PROFILE_SUCCESS',
  INBOX_USER_LIST: 'INBOX_USER_LIST',
  CLEAR_INBOX_USER_LIST: 'CLEAR_INBOX_USER_LIST',
  INBOX_USER_LIST_RESPONSE: 'INBOX_USER_LIST_RESPONSE',
  INBOX_USER_UPDATE: 'INBOX_USER_UPDATE',
  AVAILABILITY_GET: 'AVAILABILITY_GET',
  AVAILABILITY_SET: 'AVAILABILITY_SET',
  AVAILABILITY_SET_SUCCESS: 'AVAILABILITY_SET_SUCCESS',
  AVAILABILITY: 'availability',
  CONVERSATION_HISTORY_GET: 'CONVERSATION_HISTORY_GET',
  CONVERSATION_HISTORY_SET: 'CONVERSATION_HISTORY_SET',
  //Chat Window Actions
  CHAT_SELECTED_ROOM: 'CHAT_SELECTED_ROOM',
  CHANNEL_ID: 'CHANNEL_ID',
  ROOM_CONVERSATION_VIEW: 'ROOM_CONVERSATION_VIEW',
  CHAT_START_CONVERSATION: 'CHAT_START_CONVERSATION',
  CHAT_RECEIVE_MESSAGE: 'CHAT_RECEIVE_MESSAGE',
  CHAT_SEND_MESSAGE: 'sendMessage',
  //Manage user
  MANAGE_USERS_GETALL: 'MANAGE_USERS_GETALL',
  MANAGE_USERS_GETALL_RES: 'MANAGE_USERS_GETALL_RES',

  SEARCH_MESSAGES: 'SEARCH_MESSAGES',
  CLEAR_SEARCH_MESSAGES: 'CLEAR_SEARCH_MESSAGES',
  SEARCH_MESSAGES_SUCCESS: 'SEARCH_MESSAGES_SUCCESS',

  TAGGED_MESSAGES: 'TAGGED_MESSAGES',
  TAGGED_MESSAGES_SUCCESS: 'TAGGED_MESSAGES_SUCCESS',
  CLEAR_TAGGED_MESSAGES: 'CLEAR_TAGGED_MESSAGES',

  STARRED_MESSAGES: 'STARRED_MESSAGES',
  STARRED_MESSAGES_SUCCESS: 'STARRED_MESSAGES_SUCCESS',
  CLEAR_STARRED_MESSAGES: 'CLEAR_STARRED_MESSAGES',

  MUTED_MESSAGES: 'MUTED_MESSAGES',
  MUTED_MESSAGES_SUCCESS: 'MUTED_MESSAGES_SUCCESS',
  CLEAR_MUTED_MESSAGES: 'CLEAR_MUTED_MESSAGES',

  DIRECT_MESSAGES: 'DIRECT_MESSAGES',
  DIRECT_MESSAGES_SUCCESS: 'DIRECT_MESSAGES_SUCCESS',
  CLEAR_DIRECT_MESSAGES: 'CLEAR_DIRECT_MESSAGES',

  CHANNEL_MESSAGES: 'CHANNEL_MESSAGES',
  CHANNEL_MESSAGES_SUCCESS: 'CHANNEL_MESSAGES_SUCCESS',
  CLEAR_CHANNEL_MESSAGES: 'CLEAR_CHANNEL_MESSAGES',
  TOGGELE_SCREEN: 'TOGGELE_SCREEN',
  FULL_SCREEN: 'FULL_SCREEN',
  RE_FETCH_NOTES: 'RE_FETCH_NOTES'
};

//Socket
export const WSS_EVENTS = {
  COMMUNITY_CHAT: 'COMMUNITY_CHAT',
  USER_CONNECTED: 'USER_CONNECTED',
  MESSAGE_RECIEVED: 'MESSAGE_RECIEVED',
  MESSAGE_SENT: 'MESSAGE_SENT',
  USER_DISCONNECTED: 'USER_DISCONNECTED',
  TYPING: 'TYPING',
  VERIFY_USER: 'VERIFY_USER',
  LOGOUT: 'LOGOUT',
};

const BASE_URL = '/' + WORKSPACEID();
// APP ROOT
export const ROUTES = {
  APP_ROOT: '/',
  SIGNIN: '/signin',
  LOGIN: '/login',
  LOGIN_ROUTE: BASE_URL + '/login',
  LOGOUT: BASE_URL + '/logout',
  LOGOUT_ROUTE: '/:path/logout',
  FORGOT: BASE_URL + '/login/forgot',
  SETPWD: '/login/setpassword',
  REGISTER: BASE_URL + '/register',
  FORGOT_WORKSPACE: BASE_URL + '/workspace/forgot',
  SIGNUP: '/signup',
  SIGNUP_WORKSPACE: '/signup/workspace',
  SIGNUP_CHANNEL: '/signup/channel',
  SIGNUP_DROPBOX: '/signup/dropbox',
  SIGNUP_INVITE: '/signup/invite',
  SIGNUP_FINAL: '/signup/final',
  SIGNUP_JOIN: '/signup/join',
  SIGNUP_INVITED: BASE_URL + '/signup/user',
  SIGNUP_ONBOARDING: BASE_URL + '/signup/signuponboarding',
  SIDEBAR: '/sidebar',
  MESSAGES: BASE_URL + '/messages',
  MESSAGES_ROUTE: BASE_URL + '/:path(channels|messages)',
  MESSAGES_ROUTE_ID: BASE_URL + '/:path(channels|messages)/:identifier',
  MESSAGES_ROUTE_DETAILS: BASE_URL + '/:path(channels|messages)/:identifier/details',
  MANAGE: BASE_URL + '/manage/',
  MANAGE_PROFILE: BASE_URL + '/manage/profile/',
  MANAGE_CHANGE_PASSWORD: BASE_URL + '/manage/changepassword',
  MANAGE_EMAIL: BASE_URL + '/manage/email/',
  MANAGE_USERS: BASE_URL + '/manage/users/',
  MANAGE_WORKSPACE: BASE_URL + '/manage/workspace/',
  MANAGE_CHANNELS: BASE_URL + '/manage/channels/',
  MANAGE_REGISTRATION: BASE_URL + '/manage/registration/',
  MANAGE_BILLING: BASE_URL + '/manage/billing/',
  HELP: '/help',
  FILES: BASE_URL + '/files/',
  MANAGE_HELP: 'https://help.ubblu.com/',
};

export const ERROR_PAGE = {
  PAGE_NOT_FOUND: '/page-not-found',
  SERVER_ERROR: '/server-error',
  SITE_UNDER_MAINTENANCE: '/site-under-maintenance',
  COOKIE_DISABLED: '/cookie-disabled',
};

export const HTTPStatus = {
  // SUCCESS CODES
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,

  // INFO CODES

  // ERROR CODES
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  PARTIAL_CONTENT: 206,
};

export const USER_STATUESES = {
  OUT_OF_OFFICE: 'ooo',
  OFFLINE: 'offline',
  AWAY: 'away',
  ONLINE: 'online',
  DND: 'dnd',
};

export const MESSAGE_TYPE = {
  TEXT: 'TEXT',
  IMAGE: 1,
  FILE: 2,
  MARKDOWN: 3,
  YOUTUBE: 4,
};

export const USER_ROLES = ['ADMIN', 'GUEST USER', 'EMPLOYEE']; //'SUPERADMIN',

export const IMAGE_TYPES = ['jpg', 'gif', 'bmp', 'png', 'jpeg'];
export const AUDIO_TYPES = ['mp3', 'wav', 'wma', 'm4a', 'flac', 'aac', 'ogg', 'm4r'];
export const VIDEO_TYPES = ['mp4', 'avi', 'webm', 'mkv', 'wmv', 'mpg', 'mov', 'flv'];
export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];