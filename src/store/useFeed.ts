import { reactive, ref } from "vue";
import { dev } from "./devMode";

interface News {
  id: number;
  title: string;
  image: string;
  body: string;
  date: string;
}

interface Feed {
  current: News[] | undefined | null;
}

interface feedDataType {
  link: string;
  alt: string;
}

const cachedFeed: News[] = JSON.parse(
  localStorage.getItem("feedStorage") || "{}"
);

export const useFeed = reactive({
  feed: reactive<Feed>({
    current: undefined,
  }),

  images: ref<feedDataType[]>([]),

  updateFeed: function (data: News[] | undefined) {
    if (cachedFeed === null && data !== undefined) {
      this.feed.current = data;
      localStorage.setItem("feedStorage", JSON.stringify(data));
      dev().log('updateFeed', "caching");
    } else if (cachedFeed !== null && data === undefined) {
      this.feed.current = cachedFeed;
      dev().log('updateFeed', "getting from cache");
    } else if (cachedFeed && data) {
      this.feed.current = data;
    }
  },
});
