---
layout: 'layouts/writing'
title: "Why Use a Password Manager, and Which?"
date: 2020-05-16T17:34:08+01:00
topics: ["Security", "Tools"]
---

I'm incredibly privileged to be able to say that I have a huge and varied group of friends, all of whom have different backgrounds. Many of them are Irish, more of them are not, and most of them all work on different industries or fields.

Whenever I want to learn something new or figure out how to accomplish something specific, I tend to have someone in this smorgasbord of friends I can trust to throw me in the right direction. Among these people, I tend to be "The Security Guy", and recently a few have asked me about password managers.

If you're unfamiliar with them, a password manager is a program that acts like a database of sorts to store your passwords, such as those for applications or services (Such as a diet-tracking app, or your e-mail provider), though they can be used to store anything sensitive you'd like to keep secure.

With one, you can automatically generate and store a unique, complex password for each individual account you have, and can even autofill forms on your phone or web browser through the manager itself or an addon of some kind (Which could be a browser extension or separate app).

This means you only have to remember the security details for your password manager itself, and that your accounts are secure in isolation from each other - No password gets reused, and the password itself is likely too difficult to break with existing hardware, so if your account gets stolen its impact is minimized.

It can be a little bit of effort to set one up, but I consider it an important part of basic, contemporary security hygiene, which is why I will be explaining the factors that come into choosing a password manager.

The short answer is to choose one you find the least intrusive to use, update your accounts one-by-one as you use them as part of your daily life, and use it to generate the password for new accounts in the future.

By adopting it as part of your general technology usage, bit by bit it becomes a habit you take for granted; as opposed to an entire project in itself where you update accounts in bulk all at once.

## The Long Answer

This is where I'm going to get into the nuts and bolts around a password manager. There's a handful of factors I considered when choosing which to use, and most of them apply to every other program I use in my daily life.

You may want to jump to the end of the page for the conclusion, as much of the following may not be a good use of your reading time unless you're specifically trying to become more security-concious.

The factors I consider most important are the following (In no specific order):

- Platform availability
- Auditability status
- Hosting and storage options
- Pricing

### Platform Availability

I run Linux full time, have an Android phone and use Firefox as my primary browser. Whatever solution I need has to run on all three of these things, with a caveat that I have minimised my smartphone usage to the point of not even having a browser app installed or enabled.

As someone who enjoys open source software, it's important for me that the tools I use in my daily life are accessible on any platform I choose to use, and have some degree of customisability. This typically means most of the programs I use are flexible in how they can be installed, and are configurable.

### Auditability Status

If I'm using something specifically relating to security or privacy, it needs to be transparent about its implementation details. If the tool is open-source, that means anyone can confirm for themselves whether or not it is secure. If it's closed-source, they must be open to a third party audit and release the results.

It's perfectly reasonable for a commercial company to withhold its propietary technology from public view for fear of competition or accidentally giving bad actors a larger attack surface, but security via obfuscation forces me to trust the company's alleged intent or claims instead of self-evident factors.

### Hosting and Storage Options

If I have the option to run or host a piece of software itself, I will. In the grand scheme of things, I am a nobody, and I think I know enough to sufficiently take the risk of securing my information by whatever means is most convenient for my lifestyle. Otherwise, I have to trust someone else to keep something secure.

Outside of trusting a second party to keep my information secure (And back it up, and also keep the backups secure), I also have to consider where and how it's being stored. If the data is stored in a country that's part of the [14 Eyes/UKUSA Agreement](https://en.wikipedia.org/wiki/UKUSA_Agreement), it can be seized by the country's government, which the company likely cannot stop, and has no reason to try stop on my behalf - a single user.

### Pricing

I use a lot of open source software; as a result I haven't strictly needed to pay for many things in my daily toolchain. There is a certain peace of mind to paid options, however, and if you are able, you should still donate to open source projects you like - or even advocate for the company you work for to sponsor them. Without the support of corporate sponsors, many projects and events would not be able to continue!

## My Conclusion

[KeePassXC](https://keepassxc.org/).

It's [never been audited](https://keepassxc.org/docs/#faq-audit), but I understand why and have accepted the risk outweights the benefit. It has browser addons and apps for every platform I've tried to use it on, and the user interface is intuitive. As it's open source, cost was not an initial barrier to entry, and the fact I control the database means I can store and back it up wherever, whenever and however I like.

The amount of time I'm willing to manage my workflow around KeePassXC, however, reflects the amount of control I want to be able to exert over my password manager.

**The best password manager for you to choose is the one you'll actually use.**

As a result, if KeePassXC doesn't appeal to you, I suggest you check out [1Password](https://1password.com/) and [LastPass](https://www.lastpass.com/) - they're popular for a reason!
