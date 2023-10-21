<<<<<<< HEAD
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { AxiosResponse } from 'axios'
import { AuthenticateResponseBody, authenticate } from '@/api/auth'
=======
import NextAuth, { Account, Session, User } from 'next-auth'
import AppleProvider from 'next-auth/providers/apple'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'
import { JWT, getToken } from 'next-auth/jwt'
import { AdapterUser } from 'next-auth/adapters'
import CredentialsProvider from "next-auth/providers/credentials"
>>>>>>> 4376d050f7aba4400ce5284841ee661b047e5f33


const GOOGLE_AUTHORIZATION_URL =
  "https://accounts.google.com/o/oauth2/v2/auth?" +
  new URLSearchParams({
    prompt: "consent",
    access_type: "offline",
    response_type: "code",
  })

export default NextAuth({
  providers: [
<<<<<<< HEAD
    // OAuth authentication providers...
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string
    }),
  ],
  callbacks: {
    async session(params) {
      params.session.accessToken = params.token.accessToken as string
      return params.session;
    },
    async jwt(params) {
      if (params.trigger == "signIn") {
        const response: AxiosResponse<AuthenticateResponseBody> = await authenticate({ tokenId: params.account?.id_token, username: params.token.email as string });
        params.token.accessToken = response.data.accessToken;
      }
      return params.token;
    }
  },
})
=======
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
  
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null
  
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    }),
    AppleProvider({
      clientId: process.env.APPLE_ID as string,
      clientSecret: process.env.APPLE_SECRET as string,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID as string,
      clientSecret: process.env.FACEBOOK_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    // Passwordless / email sign in
  ],
  callbacks: {
    async session({ session, token }) {
      console.log('session: ', session.user)
      console.log('token', token)
      if(session.user) {
        session.user.id = token.id;
        session.accessToken = token.accessToken;
      
      }
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        console.log('user: ', user)
        token.id = user.id;
      }
      if (account) {
        console.log('account: ', account)
        token.accessToken = account.access_token;
      }
      return token;
    },
 
  },

}
  )


>>>>>>> 4376d050f7aba4400ce5284841ee661b047e5f33
