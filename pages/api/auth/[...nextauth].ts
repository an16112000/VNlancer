import NextAuth, { Account, Session, User } from 'next-auth'
import AppleProvider from 'next-auth/providers/apple'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'
import { JWT, getToken } from 'next-auth/jwt'
import { AdapterUser } from 'next-auth/adapters'
import CredentialsProvider from "next-auth/providers/credentials"


const GOOGLE_AUTHORIZATION_URL =
  "https://accounts.google.com/o/oauth2/v2/auth?" +
  new URLSearchParams({
    prompt: "consent",
    access_type: "offline",
    response_type: "code",
  })

export default NextAuth({
  providers: [
    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     username: { label: "Username", type: "text", placeholder: "jsmith" },
    //     password: { label: "Password", type: "password" }
    //   },
    //   async authorize(credentials, req) {
    //     // Add logic here to look up the user from the credentials supplied
    //     // if(!credentials?.password || !credentials.username ) {
    //     //   throw new Error("Please enter an email or password")
    //     // }
    //     // const user = { id: 1, name: "J Smith", email: "jsmith@example.com" }
    //     // if (user) {
    //     //   return user
    //     // } else {
    //     //   return null
    //     // }
    //     const user = { username: {label: 'An'}, password: '12333' }

    //   if (user) {
    //     return user
    //   } else {
    //     return null
    //   }
    //   }
    // }),
    // OAuth authentication providers...
    AppleProvider({
      clientId: process.env.APPLE_ID,
      clientSecret: process.env.APPLE_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorizationUrl: GOOGLE_AUTHORIZATION_URL,
    }),
    // Passwordless / email sign in
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.id;
      session.accessToken = token.accessToken;
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.id = user.id;
      }
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
 
  },

}
  )


