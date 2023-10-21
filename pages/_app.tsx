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
import Auth from "@/assets/common/auth";
import { AppPropsWithLayout } from "@/models/commons";

const Theme = createTheme(getDesignTokens("light"));
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App({ Component, pageProps: { session, ...pageProps },
	emotionCache = clientSideEmotionCache, }: AppPropsWithLayout) {
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
              <Auth requiredLogin={Component.requireLogin ?? false}>
                <Component {...pageProps} />

              </Auth>
            </SWRConfig>


          </SessionProvider>
        </Global>
      </ThemeProvider>
    </CacheProvider>
  );
}
