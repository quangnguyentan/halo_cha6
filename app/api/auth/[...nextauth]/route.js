// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { compare } from "bcryptjs";
// import { connectToDB } from "@mongodb";
// import User from "@models/User";

// const handler = NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       async authorize(credentials, req) {
//         if (!credentials.email || !credentials.password) {
//           throw new Error("Sai email hoặc mật khẩu");
//         }

//         await connectToDB();
//         const user = await User.findOne({ email: credentials.email });

//         if (!user || !user?.password) {
//           throw new Error("Sai email hoặc mật khẩu");
//         }

//         const isMatch = await compare(credentials.password, user.password);

//         if (!isMatch) {
//           throw new Error("Không đúng mật khẩu");
//         }
//         // Trả về thông tin người dùng bao gồm vai trò
//         return { ...user._doc, id: user._id.toString() };
//       },
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET,

//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//         token.role = user.role; // Lưu vai trò vào token
//         token.email = user.email; // Lưu vai trò vào token
//         token.profileImage = user.profileImage; // Lưu vai trò vào token
//         token.username = user.username; // Lưu vai trò vào token
//         token.chats = user.chats; // Lưu vai trò vào token
//         token.code = user.code; // Lưu vai trò vào token
//         token.codeAddFriends = user.codeAddFriends; // Lưu vai trò vào token

//         console.log(token);
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       session.user.id = token.id;
//       session.user.role = token.role; // Thêm vai trò vào session
//       session.user.name = token.username; // Thêm vai trò vào session
//       session.user.image = token.profileImage; // Thêm vai trò vào session
//       session.user.chats = token.chats; // Thêm vai trò vào session
//       session.user.email = token.email; // Thêm vai trò vào session
//       session.user.code = token.code; // Thêm vai trò vào session
//       session.user.codeAddFriends = token.codeAddFriends; // Thêm vai trò vào session

//       console.log(session);
//       return session;
//     },
//   },
// });

// export { handler as GET, handler as POST };

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";

import { connectToDB } from "@mongodb";
import User from "@models/User";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        if (!credentials.email || !credentials.password) {
          throw new Error("Sai email hoặc mật khẩu");
        }

        await connectToDB();

        const user = await User.findOne({ email: credentials.email });

        if (!user || !user?.password) {
          throw new Error("Sai email hoặc mật khẩu");
        }

        const isMatch = await compare(credentials.password, user.password);

        if (!isMatch) {
          throw new Error("Không đúng mật khẩu");
        }

        return user;
      },
    }),
  ],
  // A secret key use to deploy the application
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role; // Lưu vai trò vào token
        token.email = user.email; // Lưu vai trò vào token

        console.log(token);
      }
      return token;
    },

    async session({ session }) {
      const mongodbUser = await User.findOne({ email: session.user.email });
      session.user.id = mongodbUser._id.toString();
      session.user = { ...session.user, ...mongodbUser._doc };
      return session;
    },
  },
});

export { handler as GET, handler as POST };
