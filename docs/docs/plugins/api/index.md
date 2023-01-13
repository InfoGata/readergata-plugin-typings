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
- [ImageInfo](interfaces/ImageInfo.md)
- [NotificationMessage](interfaces/NotificationMessage.md)
- [PluginInfo](interfaces/PluginInfo.md)
- [Publication](interfaces/Publication.md)
- [PublicationSource](interfaces/PublicationSource.md)

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

Ƭ **Feed**: [`CatalogFeed`](#catalogfeed) \| [`PublicationFeed`](#publicationfeed)

___

### PublicationFeed

Ƭ **PublicationFeed**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`Publication`](interfaces/Publication.md)[] |
| `type` | ``"publication"`` |

## Variables

### application

• `Const` **application**: [`Application`](interfaces/Application.md)
