declare global {
  const application: Application;

  interface Application {
    /**
     * Make a networkRequest from parent AudioGata frame rather from plugin frame.
     */
    networkRequest(input: RequestInfo, init?: RequestInit): Promise<Response>;
    /**
     * Used to determine whether requests from networkRequest are restricted by CORs.
     */
    isNetworkRequestCorsDisabled(): Promise<boolean>;
    /**
     * Show user a notification on the bottom left of the screen
     */
    createNotification(notification: NotificationMessage): Promise<void>;
    /**
     * Sends a message to ui frames like `options` in `manifest.json`.
     */
    postUiMessage(msg: any): Promise<void>;
    /**
     * Get cors proxy configured in settings.
     */
    getCorsProxy(): Promise<string | undefined>;
    /**
     * Callback method to retreive catalogs and lists of publications
     */
    onGetFeed?(request: GetFeedRequest): Promise<Feed>;
    /**
     * Callback method that recieves parent.postMessage requests from UI frames.
     */
    onUiMessage?(message: any): Promise<void>;
    /**
     * Callback method to get binary version of a publication rather than a url
     */
    onGetPublication?(
      request: GetPublicationRequest
    ): Promise<GetPublicationResponse>;
  }

  interface Publication {
    /**
     * Title of publication
     */
    title: string;
    /**
     * Images associated with publication
     */
    images?: ImageInfo[];
    /**
     * Summary of publication
     */
    summary?: string;
    /**
     * List of Publication authors
     */
    authors?: Author[];
    /**
     * Id from third party service this Publication was retrieved from.
     */
    apiId?: string;
    sources?: PublicationSource[];
    /**
     * Plugin Id of plugin where Publication was retrieved from. Set by ReaderGata.
     */
    pluginId?: string;
  }

  interface PublicationSource {
    /**
     * Label of publication
     */
    name?: string;
    /**
     * Url that publication can be retrieved from.
     */
    source: string;
    /**
     * Type of publication. for example, ebook, pdf, etc.
     */
    type?: string;
  }

  interface Author {
    /**
     * Name of author
     */
    name: string;
  }

  interface NotificationMessage {
    /**
     * Message to show
     */
    message: string;
    type?: "default" | "success" | "error" | "warning" | "info";
  }

  interface ImageInfo {
    /**
     * Url of image
     */
    url: string;
    height?: number;
    width?: number;
  }

  interface GetFeedRequest {
    apiId?: string;
  }

  interface Catalog {
    id?: string;
    /**
     * Id from third party service this Catalog was retrieved from.
     */
    apiId?: string;
    /**
     * Plugin Id of plugin where Catalog was retrieved from. Set by ReaderGata.
     */
    pluginId?: string;
    /**
     * Name of catalog
     */
    name: string;
  }

  interface GetPublicationRequest {
    source: string;
  }

  type SourceType = "url" | "binary";

  interface GetPublicationResponse {
    /**
     * Binary data or url for the pdf/epub
     */
    source: string;
    /**
     * Whether source is a url or binary data
     * If undefined, source will be treated as binary data
     */
    sourceType?: SourceType;
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
    /**
     * Unique Id of Plugin
     */
    id?: string;
    /**
     * Name of plugin
     */
    name: string;
    /**
     * Javascript code of plugin
     */
    script: string;
    /**
     * Version number
     */
    version?: string;
    /**
     * Description of plugin
     */
    description?: string;
    /**
     * Options page html code
     */
    optionsHtml?: string;
    /**
     * Determines whether the origin of the options iframe
     * should be pluginId.audiogata.com or should be null.
     * Setting to true may be useful for running some libraries
     * on options page.
     */
    optionsSameOrigin?: boolean;
    /**
     * URL for the plugin's home page.
     */
    homepage?: string;
  }
}

export {};
