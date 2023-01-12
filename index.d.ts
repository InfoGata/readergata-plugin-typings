declare global {
  const application: Application;

  interface Application {
    /**
     * Sends a message to ui frames like `options` in `manifest.json`.
     */
    postUiMessage(msg: any): Promise<void>;
    /**
     * Get cors proxy configured in settings.
     */
    getCorsProxy(): Promise<string | undefined>;
    onGetFeed?(request: GetFeedRequest): Promise<Feed>;
    onUiMessage?(message: any): Promise<void>;
  }

  interface Publication {
    title: string;
    images?: ImageInfo[];
    summary?: string;
    authors?: Author[];
    apiId?: string;
    sources?: PublicationSource[];
    pluginId?: string;
  }

  interface PublicationSource {
    name?: string;
    source: string;
    type?: string;
  }

  interface Author {
    name: string;
  }

  interface ImageInfo {
    url: string;
    height?: number;
    width?: number;
  }

  interface GetFeedRequest {
    apiId?: string;
  }

  interface Catalog {
    id?: string;
    apiId?: string;
    pluginId?: string;
    name: string;
  }

  type CatalogFeed = {
    type: "catalog";
    items: Catalog[];
  };

  type PublicationFeed = {
    type: "publication";
    items: Publication[];
  };

  type Feed = CatalogFeed | PublicationFeed;

  interface PluginInfo {
    id?: string;
    name: string;
    script: string;
    version?: string;
    description?: string;
    optionsHtml?: string;
    optionsSameOrigin?: boolean;
    manifestUrl?: string;
    homepage?: string;
  }
}

export {};
