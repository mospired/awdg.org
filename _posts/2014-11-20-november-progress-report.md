---
layout: post
title: November Progress Report
author: jcornelius
category: blog
pid: blog
---

We'd rather not take too much time away from you looking a cat photos, so we'll jump right in.

There is progress to report on two fronts; front-end design and application architecture. This post will just talk about design. [Moses](https://twitter.com/mospired) will post some details about the architecture later.

## Pattern Library

HI THERE

## Structured Sass, Baby
We're building a pattern library based on Bootstrap components. The idea is that when someone forks the project on Github, they will be able to strip out our AWDG theme CSS files and be back to square one with Bootstrap. All CSS will be written with [Sass](http://sass-lang.com/) ('cause it's awesome) and structured in a modular format to make maintenance and future development easier.

### Here's how we're structuring the CSS.

- **Bootstrap Core** forked from [Bootstrap Sass](https://github.com/twbs/bootstrap-sass).
- **Scaffold Files** for structuring markup and general content layout.
- **Theme Files** for adding color, typography, and other style.

We will rely heavily on Sass [mixins](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#mixins) and [extends](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#extend) so that we don't end up repeating ourselves 1000 times, and so it's easier for future developers to maintain the code. We're also adhering to Chris Coyier's excellent [Sass Style Guide](http://css-tricks.com/sass-style-guide/) so things don't get out of control.

To better illustrate how this all fits together, here's the general structure of the Sass code for an event block:

**scaffold.scss**

    .event {
      @extend .container;
      .event-header {
        @include make-row();
        .event-title {
          @include make-sm-col(12);
        }
        .event-details {
          @include make-row();
          .event-description {
            @include make-sm-col(8);
          }
          .event-photo {
           @include make-sm-col(4);
         }
       }
     }


**theme.scss**

     .event {
      .event-title {
        h1 {
          color: $brand-primary;
        }
        .event-datetime {
          color: $gray-dark;
        }
      }
      .event-description {
        p:first-of-type {
          font-size:1.35em;
        }
      }
    }

This way, the designer can focus on the structure in one place, and the style in another.

## Next Up
Moses will post some details about the backend architecture and how we're progressing with user accounts and event management.

Until then, thanks for following along!

Cheers,

&mdash; J Cornelius