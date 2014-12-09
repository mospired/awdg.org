---
layout: styleguide
title: Events
pid: styleguide
weight: 3
---

# Event Modules

Events can be broken down into several modules. There are general content modules: [Header](headers.html), Actions; and event-specific sub-modules: [Description](#description), [Speaker](#speaker), [Location](#location), [Sponsors](#sponsors).


## Description

The main Description container is a `<div>`, but you can use `<section>` if you prefer. Either way, be sure to include `class="description"` on the element for it to inherit the proper styles.

```
<div class="description">
  ...
</div>
```

By default, the first paragragh in a `.description` container will inherit the styles from the base Bootstrap class `.lead`. This can be overridden in [theme.scss](https://github.com/AWDG/awdg.org/blob/gh-pages/_sass/theme.scss)

Look for this:

{% highlight scss %}
.description {
  margin-bottom: 2em;
  p:first-of-type {
    @extend .lead;
  }
}
{% endhighlight %}

---

## Speaker

The speaker section is defined by a `<div>` or `<section>` with `class="speaker"`, and has several components defined by class name: `speaker-data`, `speaker-name`, `speaker-photo`, `speaker-bio`

{% highlight html %}
<div class="speaker">
  <div class="speaker-photo">
    <img src="" alt="{% raw %}{{ page.speaker.name }}{% endraw %}">
  </div>
  <div class="speaker-data">
    <h3 class="speaker-name">{% raw %}{{ page.speaker.name }}{% endraw %}</h3>
    <div class="speaker-bio">{% raw %}{{ page.speaker.bio }}{% endraw %}</div>
    <div class="speaker-links">
      <a href="{% raw %}{{ page.speaker.twitter }}{% endraw %}">Twitter</a>
      <a href="{% raw %}{{ page.speaker.website }}{% endraw %}">Website</a>
    </div>
  </div>
</div>
{% endhighlight %}


