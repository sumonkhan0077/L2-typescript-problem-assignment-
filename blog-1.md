# Blog-1: Why `any` is a Type Safety Hole and Why `unknown` is Safer 

## Introduction
TypeScript এর মূল শক্তি হলো type safety। কিন্তু any type ব্যবহার করলে এই safety নষ্ট হয়ে যায়। এজন্য any কে বলা হয় “type safety hole”। অন্যদিকে unknown বেশি safe এবং modern TypeScript এ recommended।


## Why `any` is dangerous

any ব্যবহার করলে TypeScript সব type checking বন্ধ করে দেয়।

```markdown
let data: any;

data = 10;
data = "Hello";
data.toUpperCase(); //  no error (but unsafe)
```

-> **এখানে সমস্যা হলো:**
- ভুল মেথড কল করলেও কোনো এরর দেখায় না
- রানটাইমে এরর হওয়ার সম্ভাবনা খুব বেশি
- ভুল method use করলেও error দিবে না  
- runtime error হওয়ার chance বেশি

## Why `unknown`known is safer

**unknown মানে:** - “আমি জানি না এই ভ্যালুর টাইপ কী”

```markdown
let data: unknown;

data = 10;
data = "Hello";
data = { name: "MD" };

কিন্তু এখন সরাসরি কোনো মেথড ব্যবহার করা যাবে না:

// data.toUpperCase();     // ❌ Compile-time Error
// data.name;              // ❌ Compile-time Error
// data * 2;               // ❌ Compile-time Error
```

**কেন এরর দেয়?**  
unknown টাইপ দিয়ে TypeScript তোমাকে জোর করে চেক করতে বাধ্য করে যে তুমি ভ্যালুটা কোন টাইপে আছে। সরাসরি কোনো অপারেশন করতে দেয় না। এটাই unknown-এর সেফটি ফিচার।

## **সঠিক উপায় (Type Narrowing):**
**unknown ব্যবহার করতে হলে আগে type check করতে হয়, এটাকেই বলে type narrowing।**
```markdown
TypeScriptlet data: unknown;

data = "Hello World";

if (typeof data === "string") {
  console.log(data.toUpperCase());   //  এখন এরর হবে না
}

if (typeof data === "number") {
  console.log(data * 2);             //  Safe
}
```


## Conclusion
- any = unsafe, no type checking 
- unknown = safe, requires checking 
- Type narrowing ensures runtime safety

**Real-world TypeScript projects এ unknown বেশি recommended।**