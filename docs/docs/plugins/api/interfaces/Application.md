---
id: "Application"
title: "Interface: Application"
sidebar_label: "Application"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### networkRequest

• **networkRequest**: (`input`: `RequestInfo` \| `URL`, `init?`: `RequestInit`) => `Promise`<`Response`\>

#### Type declaration

▸ (`input`, `init?`): `Promise`<`Response`\>

Make a networkRequest from parent ReaderGata frame rather from plugin frame.

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `RequestInfo` \| `URL` |
| `init?` | `RequestInit` |

##### Returns

`Promise`<`Response`\>

## Methods

### createNotification

▸ **createNotification**(`notification`): `Promise`<`void`\>

Show user a notification on the bottom left of the screen

#### Parameters

| Name | Type |
| :------ | :------ |
| `notification` | [`NotificationMessage`](NotificationMessage.md) |

#### Returns

`Promise`<`void`\>

___

### getCorsProxy

▸ **getCorsProxy**(): `Promise`<`undefined` \| `string`\>

Get cors proxy configured in settings.

#### Returns

`Promise`<`undefined` \| `string`\>

___

### getTheme

▸ **getTheme**(): `Promise`<[`Theme`](../#theme)\>

Returns the user's current theme

#### Returns

`Promise`<[`Theme`](../#theme)\>

___

### isLoggedIn

▸ **isLoggedIn**(): `Promise`<`boolean`\>

Returns true if thec user has been to logged in based in what is in
authentication in the manifest

#### Returns

`Promise`<`boolean`\>

___

### isNetworkRequestCorsDisabled

▸ **isNetworkRequestCorsDisabled**(): `Promise`<`boolean`\>

Used to determine whether requests from networkRequest are restricted by CORs.

#### Returns

`Promise`<`boolean`\>

___

### onChangeTheme

▸ **onChangeTheme**(`theme`): `Promise`<`void`\>

Callback method that is called after a users changes theme

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`Theme`](../#theme) |

#### Returns

`Promise`<`void`\>

___

### onGetFeed

▸ `Optional` **onGetFeed**(`request`): `Promise`<[`Feed`](../#feed)\>

Callback method to retreive catalogs and lists of publications

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`GetFeedRequest`](GetFeedRequest.md) |

#### Returns

`Promise`<[`Feed`](../#feed)\>

___

### onGetPublication

▸ `Optional` **onGetPublication**(`request`): `Promise`<[`GetPublicationResponse`](GetPublicationResponse.md)\>

Callback method to get binary version of a publication rather than a url

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`GetPublicationRequest`](GetPublicationRequest.md) |

#### Returns

`Promise`<[`GetPublicationResponse`](GetPublicationResponse.md)\>

___

### onPostLogin

▸ `Optional` **onPostLogin**(): `Promise`<`void`\>

Callback method that is called after the user has logged in

#### Returns

`Promise`<`void`\>

___

### onPostLogout

▸ `Optional` **onPostLogout**(): `Promise`<`void`\>

Callback method that is called after the user has logged out

#### Returns

`Promise`<`void`\>

___

### onSearch

▸ `Optional` **onSearch**(`request`): `Promise`<[`Feed`](../#feed)\>

Callback method to search for publications

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`SearchRequest`](SearchRequest.md) |

#### Returns

`Promise`<[`Feed`](../#feed)\>

___

### onUiMessage

▸ `Optional` **onUiMessage**(`message`): `Promise`<`void`\>

Callback method that recieves parent.postMessage requests from UI frames.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |

#### Returns

`Promise`<`void`\>

___

### postUiMessage

▸ **postUiMessage**(`msg`): `Promise`<`void`\>

Sends a message to ui frames like `options` in `manifest.json`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `any` |

#### Returns

`Promise`<`void`\>
