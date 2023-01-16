---
id: "Application"
title: "Interface: Application"
sidebar_label: "Application"
sidebar_position: 0
custom_edit_url: null
---

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

### isNetworkRequestCorsDisabled

▸ **isNetworkRequestCorsDisabled**(): `Promise`<`boolean`\>

Used to determine whether requests from networkRequest are restricted by CORs.

#### Returns

`Promise`<`boolean`\>

___

### networkRequest

▸ **networkRequest**(`input`, `init?`): `Promise`<`Response`\>

Make a networkRequest from parent AudioGata frame rather from plugin frame.

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `RequestInfo` |
| `init?` | `RequestInit` |

#### Returns

`Promise`<`Response`\>

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
