import "@/styles/globals.css";
import { CacheProvider, EmotionCache, ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import { createTheme } from "@mui/material";
import { getDesignTokens } from "@/ultils/theme";
import { SWRConfig } from "swr";
import axios from "axios";
import { SessionProvider } from "next-auth/react";
import { createEmotionCache } from "@/ultils/createEmotionCache";
import Global from "@/layout/globalStyles";

const Theme = createTheme(getDesignTokens("light"));
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App({
  Component,
  pageProps: { session, ...pageProps },
  emotionCache = clientSideEmotionCache,
}: MyAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={Theme}>
        <Global>
          <SessionProvider session={session}>
            <SWRConfig
              value={{
                fetcher: async (url) =>
                  await axios(url).then((data) => data.data),
              }}
            >
              <Component {...pageProps} />
            </SWRConfig>
          </SessionProvider>
        </Global>
      </ThemeProvider>
    </CacheProvider>
  );
}
