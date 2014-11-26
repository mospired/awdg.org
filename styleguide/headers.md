---
layout: styleguide
title: Headers
pid: styleguide
weight: 2
---

# Header Modules

The basic structure of a Header module is simple. It requires a `<header>` element containing one `<hgroup>` element, which should contain at least one `<hX>` element (preferably an `<h1>` containing the Page Title accessed by `{% raw %}{{ page.title }}{% endraw %}`). In this case the `<header>` element extends `.row`, and `<hgroup>` extends `.col-sm-12`.

<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">Basic Header Module Example</h3>
  </div>
  <div class="panel-body post">
    <header>
      <hgroup>
        <h1>Page Title</h1>
      </hgroup>
    </header>
  </div>
  <div class="panel-footer">
    {% highlight html %}
<header>
  <hgroup>
    <h1>{% raw %}{{ page.title }}{% endraw %}</h1>
  </hgroup>
</header>
    {% endhighlight %}
  </div>
</div>

They can also have a subheader using a `<h4>` element for extra info.

<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">Basic Header Module with Subheader Example</h3>
  </div>
  <div class="panel-body post">
    <header>
      <hgroup>
        <h1>Page Title</h1>
        <h4>Supplimental information about the page or section goes here.</h4>
      </hgroup>
    </header>
  </div>
  <div class="panel-footer">
    {% highlight html %}
<header>
  <hgroup>
    <h1>{% raw %}{{ page.title }}{% endraw %}</h1>
    <h4>Supplimental information about the page or section goes here.</h4>
  </hgroup>
</header>
{% endhighlight %}
</div>
</div>


----

## Post Pages

Post pages add a publication date to the `<hgroup>` using a `<h5>` element.

<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">Post Header Module Example</h3>
  </div>
  <div class="panel-body post">
    <header>
      <hgroup>
        <h5>October 2, 2014</h5>
        <h1>Page Title</h1>
      </hgroup>
    </header>
  </div>
  <div class="panel-footer">
    {% highlight html %}
<header>
  <hgroup>
    <h5>{{ page.date | date: "%B %d, %Y"}}</h5>
    <h1>{% raw %}{{ page.title }}{% endraw %}</h1>
  </hgroup>
</header>
{% endhighlight %}
  </div>
</div>

----

## Event Pages
Since event pages have more information to display in the header, there should be an `<h4>` element within the `<hgroup>` for providing supplimental information about the content block. In the case of an event page, the `<h4>` will contain two `<span>` elements.

There will be a `<div>` element which provides a place for buttons, links, and other elements.

In this case, `<header>` element extends `.row` as before, but `<hgroup>` extends `.col-sm-9` and the `<div>` extends `.col-sm-3`

#### The rendered header module for an event looks like this:
<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">Event Header Module Example</h3>
  </div>
  <div class="panel-body event">
    <header>
      <hgroup>
        <h1>Event Title</h1>
        <h4><span class="datetime">October 02, 2014 - 7:00 PM</span> // <a class="location" href="#">Venue Name</a></h4>
      </hgroup>
      <div>
        <a href="#" class="rsvp-button"><i class="fa fa-check-square"></i> RSVP Now</a>
      </div>
    </header>
  </div>
  <div class="panel-footer">
{% highlight html %}
<header>
  <hgroup>
    <h1>{% raw %}{{ page.title }}{% endraw %}</h1>
    <h4><span class="datetime">{% raw %}{{ page.date }}{% endraw %}</span> // <a class="location" href="{% raw %}{{ page.location.url }}{% endraw %}">{% raw %}{{ page.location.name }}{% endraw %}</a></h4>
  </hgroup>
  <div>
    <a href="{% raw %}{{ page.rsvp_url }}{% endraw %}" class="rsvp-button"><i class="fa fa-check-square"></i> RSVP Now</a>
  </div>
</header>
{% endhighlight %}
  </div>
</div>

### Header Sass

Here's the corresponding Sass, which can be found in [_scaffold.scss](https://github.com/AWDG/awdg.org/blob/gh-pages/_sass/_scaffold.scss).

{% highlight scss %}
section header {
  @include make-row();
  border-bottom: 1px solid $brand-primary;
  margin-bottom: 1.5em;
  hgroup {
    @include make-sm-column(12);
    h1 { margin-top: 0; }
  }
}

section .event header {
  hgroup {
    @include make-sm-column(9);
  }
  div {
    @include make-sm-column(3);
    text-align: right;
  }
}
{% endhighlight %}