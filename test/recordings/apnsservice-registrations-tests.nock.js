// This file has been autogenerated.

exports.scopes = [[function (nock) { 
var result = 
nock('https://ciserversb-sb.accesscontrol.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/WRAPv0.9/', '*')
  .reply(200, "wrap_access_token=net.windows.servicebus.action%3dListen%252cManage%252cSend%26http%253a%252f%252fschemas.microsoft.com%252faccesscontrolservice%252f2010%252f07%252fclaims%252fidentityprovider%3dhttps%253a%252f%252fciserversb-sb.accesscontrol.windows.net%252f%26Audience%3dhttp%253a%252f%252fciserversb.servicebus.windows.net%252f%2524Resources%252fNotificationHubs%253fapi-version%253d2013-04%26ExpiresOn%3d1366285344%26Issuer%3dhttps%253a%252f%252fciserversb-sb.accesscontrol.windows.net%252f%26HMACSHA256%3du%252fvPoOMFKK%252fJpgmMx0fNLtDjZAf8Kh18X894%252fsGHZ9o%253d&wrap_access_token_expires_in=1199", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/x-www-form-urlencoded; charset=us-ascii',
  expires: '-1',
  'request-id': '98768af7-9e4d-4e02-863c-11c5e8de778e',
  'x-content-type-options': 'nosniff',
  date: 'Thu, 18 Apr 2013 11:22:23 GMT',
  'content-length': '604' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversb.servicebus.windows.net:443')
  .get('/$Resources/NotificationHubs?api-version=2013-04')
  .reply(200, "<feed xmlns=\"http://www.w3.org/2005/Atom\"><title type=\"text\">NotificationHubs</title><id>https://ciserversb.servicebus.windows.net/$Resources/NotificationHubs?api-version=2013-04</id><updated>2013-04-18T11:22:25Z</updated><link rel=\"self\" href=\"https://ciserversb.servicebus.windows.net/$Resources/NotificationHubs?api-version=2013-04\"/><entry xml:base=\"https://ciserversb.servicebus.windows.net/$Resources/NotificationHubs?api-version=2013-04\"><id>https://ciserversb.servicebus.windows.net/myhub?api-version=2013-04</id><title type=\"text\">myhub</title><published>2013-02-23T00:22:23Z</published><updated>2013-02-28T14:27:57Z</updated><author><name>ciserversb</name></author><link rel=\"self\" href=\"../myhub?api-version=2013-04\"/><content type=\"application/xml\"><NotificationHubDescription xmlns=\"http://schemas.microsoft.com/netservices/2010/10/servicebus/connect\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><RegistrationTtl>P90D</RegistrationTtl><WnsCredential><Properties><Property><Name>PackageSid</Name><Value>ms-app://s-1-15-2-3624382523-3073449496-1584155076-733487050-1832530571-3873708642-3859416007</Value></Property><Property><Name>SecretKey</Name><Value>Blz9qc7m94s6lM0nO7xwybMY0bDLy+aa</Value></Property><Property><Name>WindowsLiveEndpoint</Name><Value>https://login.live.com/accesstoken.srf</Value></Property></Properties></WnsCredential><AuthorizationRules><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights></Rights><KeyName>DefaultListenSharedAccessSignature</KeyName><PrimaryKey>cVV3cmNZOCkkdXktXl8qbQ==</PrimaryKey></AuthorizationRule><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights><AccessRights>Manage</AccessRights><AccessRights>Send</AccessRights></Rights><KeyName>DefaultFullSharedAccessSignature</KeyName><PrimaryKey>Kj5FUlB4UmM1KXAybD1RPQ==</PrimaryKey></AuthorizationRule></AuthorizationRules></NotificationHubDescription></content></entry></feed>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;type=feed;charset=utf-8',
  server: 'Microsoft-HTTPAPI/2.0',
  date: 'Thu, 18 Apr 2013 11:22:25 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversb-sb.accesscontrol.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/WRAPv0.9/', '*')
  .reply(200, "wrap_access_token=net.windows.servicebus.action%3dListen%252cManage%252cSend%26http%253a%252f%252fschemas.microsoft.com%252faccesscontrolservice%252f2010%252f07%252fclaims%252fidentityprovider%3dhttps%253a%252f%252fciserversb-sb.accesscontrol.windows.net%252f%26Audience%3dhttp%253a%252f%252fciserversb.servicebus.windows.net%252fxplathubnxt1%253fapi-version%253d2013-04%26ExpiresOn%3d1366285347%26Issuer%3dhttps%253a%252f%252fciserversb-sb.accesscontrol.windows.net%252f%26HMACSHA256%3d%252fmAxujqDjytNPyQYH%252faSFSp4YVNq9swFhd1EWmnHHpw%253d&wrap_access_token_expires_in=1199", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/x-www-form-urlencoded; charset=us-ascii',
  expires: '-1',
  'request-id': '0e667ef3-45f1-451b-86cb-e59ae9603af1',
  'x-content-type-options': 'nosniff',
  date: 'Thu, 18 Apr 2013 11:22:26 GMT',
  'content-length': '577' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversb.servicebus.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/xplathubnxt1?api-version=2013-04', '*')
  .reply(201, "<entry xmlns=\"http://www.w3.org/2005/Atom\"><id>https://ciserversb.servicebus.windows.net/xplathubnxt1?api-version=2013-04</id><title type=\"text\">xplathubnxt1</title><published>2013-04-18T11:22:28Z</published><updated>2013-04-18T11:22:28Z</updated><author><name>ciserversb</name></author><link rel=\"self\" href=\"https://ciserversb.servicebus.windows.net/xplathubnxt1?api-version=2013-04\"/><content type=\"application/xml\"><NotificationHubDescription xmlns=\"http://schemas.microsoft.com/netservices/2010/10/servicebus/connect\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><RegistrationTtl>P90D</RegistrationTtl><AuthorizationRules><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights></Rights><CreatedTime>2013-04-18T11:22:28.9726303Z</CreatedTime><ModifiedTime>2013-04-18T11:22:28.9726303Z</ModifiedTime><KeyName>DefaultListenSharedAccessSignature</KeyName><PrimaryKey>sCPF66ZGN49VIRW4cE6/14fWjr7dN+pp13kgN/AA6kk=</PrimaryKey></AuthorizationRule><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights><AccessRights>Manage</AccessRights><AccessRights>Send</AccessRights></Rights><CreatedTime>2013-04-18T11:22:28.9726303Z</CreatedTime><ModifiedTime>2013-04-18T11:22:28.9726303Z</ModifiedTime><KeyName>DefaultFullSharedAccessSignature</KeyName><PrimaryKey>dHnmSJb9p20Z0D9RdX2yfUxV4Q8pXm+19m59PtKY7CY=</PrimaryKey></AuthorizationRule></AuthorizationRules></NotificationHubDescription></content></entry>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;type=entry;charset=utf-8',
  server: 'Microsoft-HTTPAPI/2.0',
  date: 'Thu, 18 Apr 2013 11:22:28 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversb-sb.accesscontrol.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/WRAPv0.9/', '*')
  .reply(200, "wrap_access_token=net.windows.servicebus.action%3dListen%252cManage%252cSend%26http%253a%252f%252fschemas.microsoft.com%252faccesscontrolservice%252f2010%252f07%252fclaims%252fidentityprovider%3dhttps%253a%252f%252fciserversb-sb.accesscontrol.windows.net%252f%26Audience%3dhttp%253a%252f%252fciserversb.servicebus.windows.net%252fxplathubnxt1%252fregistrations%253fapi-version%253d2013-04%26ExpiresOn%3d1366285350%26Issuer%3dhttps%253a%252f%252fciserversb-sb.accesscontrol.windows.net%252f%26HMACSHA256%3dFOan6NcW%252fCVXvLksJfvTnS6t3awdqy%252fwch8lmWz8qBU%253d&wrap_access_token_expires_in=1199", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/x-www-form-urlencoded; charset=us-ascii',
  expires: '-1',
  'request-id': '8813b10c-1ce4-42ae-aeb5-dd1f533c5892',
  'x-content-type-options': 'nosniff',
  date: 'Thu, 18 Apr 2013 11:22:29 GMT',
  'content-length': '595' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversb.servicebus.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/xplathubnxt1/registrations?api-version=2013-04', '*')
  .reply(200, "<entry a:etag=\"W/&quot;1&quot;\" xmlns=\"http://www.w3.org/2005/Atom\" xmlns:a=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\"><id>https://ciserversb.servicebus.windows.net/xplathubnxt1/registrations/8884845349899660640-7813063171941118859?api-version=2013-04</id><title type=\"text\">8884845349899660640-7813063171941118859</title><published>2013-04-18T11:22:32Z</published><updated>2013-04-18T11:22:32Z</updated><link rel=\"self\" href=\"https://ciserversb.servicebus.windows.net/xplathubnxt1/registrations/8884845349899660640-7813063171941118859?api-version=2013-04\"/><content type=\"application/xml\"><AppleRegistrationDescription xmlns=\"http://schemas.microsoft.com/netservices/2010/10/servicebus/connect\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ETag>1</ETag><ExpirationTime>2013-07-17T11:22:31.809Z</ExpirationTime><RegistrationId>8884845349899660640-7813063171941118859</RegistrationId><DeviceToken>0F744707BEBCF74F9B7C25D48E3358945F6AA01DA5DDB387462C7EAF61BBAD78</DeviceToken></AppleRegistrationDescription></content></entry>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;type=entry;charset=utf-8',
  'content-location': 'https://ciserversb.servicebus.windows.net/xplathubnxt1/registrations/8884845349899660640-7813063171941118859?api-version=2013-04',
  etag: 'W/"1"',
  server: 'Microsoft-HTTPAPI/2.0',
  date: 'Thu, 18 Apr 2013 11:22:31 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversb-sb.accesscontrol.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/WRAPv0.9/', '*')
  .reply(200, "wrap_access_token=net.windows.servicebus.action%3dListen%252cManage%252cSend%26http%253a%252f%252fschemas.microsoft.com%252faccesscontrolservice%252f2010%252f07%252fclaims%252fidentityprovider%3dhttps%253a%252f%252fciserversb-sb.accesscontrol.windows.net%252f%26Audience%3dhttp%253a%252f%252fciserversb.servicebus.windows.net%252fxplathubnxt1%252fregistrations%252f8884845349899660640-7813063171941118859%253fapi-version%253d2013-04%26ExpiresOn%3d1366285353%26Issuer%3dhttps%253a%252f%252fciserversb-sb.accesscontrol.windows.net%252f%26HMACSHA256%3droFReSfEfn7c8HHDalz4ZefNp9f4vl6IbepWNs%252fikcI%253d&wrap_access_token_expires_in=1200", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/x-www-form-urlencoded; charset=us-ascii',
  expires: '-1',
  'request-id': '5de078df-c82e-4167-ad8b-35c65c651690',
  'x-content-type-options': 'nosniff',
  date: 'Thu, 18 Apr 2013 11:22:33 GMT',
  'content-length': '635' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversb.servicebus.windows.net:443')
  .delete('/xplathubnxt1/registrations/8884845349899660640-7813063171941118859?api-version=2013-04')
  .reply(200, "", { 'content-length': '0',
  server: 'Microsoft-HTTPAPI/2.0',
  date: 'Thu, 18 Apr 2013 11:22:34 GMT' });
 return result; }]