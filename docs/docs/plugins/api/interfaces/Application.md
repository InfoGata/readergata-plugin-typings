---
id: "Application"
title: "Interface: Application"
sidebar_label: "Application"
sidebar_position: 0
custom_edit_url: null
---

## Methods

### getCorsProxy

▸ **getCorsProxy**(): `Promise`<`undefined` \| `string`\>

Get cors proxy configured in settings.

#### Returns

`Promise`<`undefined` \| `string`\>

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
