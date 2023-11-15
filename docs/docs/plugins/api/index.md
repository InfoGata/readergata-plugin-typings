---
id: "index"
title: "@infogata/readergata-plugin-typings"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Interfaces

- [Application](interfaces/Application.md)
- [Author](interfaces/Author.md)
- [Catalog](interfaces/Catalog.md)
- [GetFeedRequest](interfaces/GetFeedRequest.md)
- [GetPublicationRequest](interfaces/GetPublicationRequest.md)
- [GetPublicationResponse](interfaces/GetPublicationResponse.md)
- [ImageInfo](interfaces/ImageInfo.md)
- [Manifest](interfaces/Manifest.md)
- [ManifestOptions](interfaces/ManifestOptions.md)
- [NotificationMessage](interfaces/NotificationMessage.md)
- [PluginInfo](interfaces/PluginInfo.md)
- [Publication](interfaces/Publication.md)
- [PublicationSource](interfaces/PublicationSource.md)
- [SearchRequest](interfaces/SearchRequest.md)

## Type Aliases

### CatalogFeed

Ƭ **CatalogFeed**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`Catalog`](interfaces/Catalog.md)[] |
| `type` | ``"catalog"`` |

___

### Feed

Ƭ **Feed**: [`CatalogFeed`](#catalogfeed) \| [`PublicationFeed`](#publicationfeed) & [`FeedInfo`](#feedinfo)

___

### FeedInfo

Ƭ **FeedInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `hasSearch?` | `boolean` |
| `searchInfo?` | `string` |

___

### PublicationFeed

Ƭ **PublicationFeed**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`Publication`](interfaces/Publication.md)[] |
| `type` | ``"publication"`` |

___

### SourceType

Ƭ **SourceType**: ``"url"`` \| ``"binary"``

## Variables

### application

• `Const` **application**: [`Application`](interfaces/Application.md)
