# Blog-2: How `Pick` and `Omit` Utility Types Prevent Code Duplication in TypeScript (DRY Principle)

## Introduction

TypeScript এ বড় applications বা complex models নিয়ে কাজ করার সময় প্রায়ই আমাদের একটা বড় interface থেকে কিছু নির্দিষ্ট অংশ (slice) আলাদা করে ব্যবহার করতে হয়।

কিন্তু সমস্যা হলো—একই type বারবার কপি করে নতুন interface বানালে কোড duplicate হয়ে যায়, আর ভবিষ্যতে maintain করা কঠিন হয়ে পড়ে।

এই সমস্যার সুন্দর সমাধান হলো Pick এবং Omit utility types। এগুলো আমাদের কোডকে clean, reusable এবং DRY (Don't Repeat Yourself) রাখে।

## Problem: Without `Pick` and `Omit`

ধরি আমাদের একটি বড় User interface আছে:
```markdown
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
```
**এখন বাস্তব প্রজেক্টে এই একই user model বিভিন্ন জায়গায় different shape এ দরকার হয়:**


- Public profile → id, name, email
- Login system → email, password
- API response → password বাদ দিতে হবে

## Naive way (bad practice)**
```markdown
interface PublicUser {
  id: number;
  name: string;
  email: string;
}

interface LoginUser {
  email: string;
  password: string;
}

interface SafeUser {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}
```
**এখানে সমস্যা কী?**

- একই fields বারবার লেখা হচ্ছে
- এক জায়গায় User interface change করলে সব জায়গায় manually update করতে হবে
- Codebase বড় হলে maintain করা কঠিন হয়ে যায়
- Human error হওয়ার সম্ভাবনা বেড়ে যায়

## Solution: `Pick` Utility Type

`Pick` আমাদের existing interface থেকে নির্দিষ্ট কিছু fields নিয়ে নতুন type তৈরি করতে সাহায্য করে।
```markdown
type PublicUser = Pick<User, "id" | "name" | "email">;
```
**কী হচ্ছে এখানে?**
- User interface থেকে শুধু প্রয়োজনীয় fields নেওয়া হচ্ছে
- নতুন interface আলাদা করে লিখতে হচ্ছে না
- Code duplication কমে যাচ্ছে
- DRY principle maintain হচ্ছে

## Solution: `Omit` Utility Type

`Omit` ঠিক উল্টোভাবে কাজ করে — এটা কিছু field বাদ দিয়ে নতুন type তৈরি করে।
```markdown
type SafeUser = Omit<User, "password">;
```
**কী হচ্ছে এখানে?**
- User থেকে শুধু password বাদ দেওয়া হয়েছে
- বাকি সব fields automatically included
- Security-related cases এ খুব useful
- Clean এবং minimal code

# Real-world Example (API Design)
**Backend response safe করা:**
```markdown
type UserResponse = Omit<User, "password">;
```
**Frontend public profile:**
```markdown
type Profile = Pick<User, "id" | "name" | "email">;
```
 **লক্ষ্য করো:**  
 একই `User` model থেকে বিভিন্ন প্রয়োজন অনুযায়ী আলাদা “slice” বানানো হচ্ছে — কিন্তু কোথাও duplicate code নেই।


## Conclusion
- Pick → প্রয়োজনীয় fields extract করে clean type বানায়
- Omit → unwanted fields remove করে safer type বানায়
- দুটোই code duplication কমিয়ে DRY principle maintain করে
- Large-scale TypeScript projects এ এগুলো খুবই গুরুত্বপূর্ণ

**বাস্তব প্রজেক্টে এগুলো ব্যবহার করলে codebase cleaner হয়, maintain করা সহজ হয়, আর ভবিষ্যতের bugs অনেক কমে যায়।**