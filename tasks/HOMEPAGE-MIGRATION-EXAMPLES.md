# HomePage Migration - Before & After Examples

**Date:** February 24, 2026  
**Purpose:** Quick reference for HomePage migration  
**Status:** Ready to use

---

## 🎯 QUICK MIGRATION REFERENCE

This file provides **copy-paste ready** code snippets for migrating HomePage sections from Tailwind to WordPress CSS classes.

---

## 📝 SECTION 1: MAIN WRAPPER

### **BEFORE**
```tsx
<main className="min-h-screen">
```

### **AFTER**
```tsx
<main className="wp-template-home">
```

---

## 📝 SECTION 2: FEATURED TOURS

### **BEFORE**
```tsx
<GroupBlock sectionStyle="section-card-grid-default">
  <Container>
    <SectionHeader
      section={toursSection}
      icon={SECTION_ICON_MAP["featured-tours"]}
    />

    <CardGrid columns={3}>
      {featuredTours.map((tour) => (
        <TourCardPattern
          key={tour.id}
          tour={tour}
          onSelect={() => nav("/tours/" + tour.slug)}
        />
      ))}
    </CardGrid>

    {toursSection.viewAllLabel && toursSection.viewAllHref && (
      <div className="text-center mt-12">
        <Button
          variant="primary"
          size="default"
          onClick={() => nav(toursSection.viewAllHref!)}
          icon={<ArrowRight className="w-4 h-4" />}
          iconPosition="right"
        >
          {toursSection.viewAllLabel}
        </Button>
      </div>
    )}
  </Container>
</GroupBlock>
```

### **AFTER**
```tsx
<section className="wp-template-home__tours">
  <Container>
    <SectionHeader
      section={toursSection}
      icon={SECTION_ICON_MAP["featured-tours"]}
    />

    <div className="wp-template-home__tours-grid">
      {featuredTours.map((tour) => (
        <TourCardPattern
          key={tour.id}
          tour={tour}
          onSelect={() => nav("/tours/" + tour.slug)}
        />
      ))}
    </div>

    {toursSection.viewAllLabel && toursSection.viewAllHref && (
      <div className="wp-template-home__view-all">
        <Button
          variant="primary"
          size="default"
          onClick={() => nav(toursSection.viewAllHref!)}
          icon={<ArrowRight className="w-4 h-4" />}
          iconPosition="right"
        >
          {toursSection.viewAllLabel}
        </Button>
      </div>
    )}
  </Container>
</section>
```

**Changes:**
- `GroupBlock sectionStyle="section-card-grid-default"` → `<section className="wp-template-home__tours">`
- `CardGrid columns={3}` → `<div className="wp-template-home__tours-grid">`
- `className="text-center mt-12"` → `className="wp-template-home__view-all"`

---

## 📝 SECTION 3: DESTINATIONS

### **BEFORE**
```tsx
<section className="section-card-grid-alternate bg-primary/5">
  <Container>
    <SectionHeader
      section={destinationsSection}
      icon={SECTION_ICON_MAP["destinations"]}
    />

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredDestinations.map((destination) => (
        <DestinationCard
          key={destination.id}
          destination={destination}
          onClick={() => nav("/destinations/" + destination.slug)}
        />
      ))}
    </div>

    {destinationsSection.viewAllLabel &&
      destinationsSection.viewAllHref && (
        <div className="text-center mt-12">
          <Button
            variant="primary"
            size="default"
            onClick={() => nav(destinationsSection.viewAllHref!)}
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
          >
            {destinationsSection.viewAllLabel}
          </Button>
        </div>
      )}
  </Container>
</section>
```

### **AFTER**
```tsx
<section className="wp-template-home__destinations">
  <Container>
    <SectionHeader
      section={destinationsSection}
      icon={SECTION_ICON_MAP["destinations"]}
    />

    <div className="wp-template-home__destinations-grid">
      {featuredDestinations.map((destination) => (
        <DestinationCard
          key={destination.id}
          destination={destination}
          onClick={() => nav("/destinations/" + destination.slug)}
        />
      ))}
    </div>

    {destinationsSection.viewAllLabel &&
      destinationsSection.viewAllHref && (
        <div className="wp-template-home__view-all">
          <Button
            variant="primary"
            size="default"
            onClick={() => nav(destinationsSection.viewAllHref!)}
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
          >
            {destinationsSection.viewAllLabel}
          </Button>
        </div>
      )}
  </Container>
</section>
```

**Changes:**
- `className="section-card-grid-alternate bg-primary/5"` → `className="wp-template-home__destinations"`
- `className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"` → `className="wp-template-home__destinations-grid"`
- `className="text-center mt-12"` → `className="wp-template-home__view-all"`

---

## 📝 SECTION 4: WHY CHOOSE US

### **BEFORE**
```tsx
<GroupBlock sectionStyle="section-feature-default">
  <WhyChooseUsPattern
    title={whySection.title}
    description={whySection.description}
    features={features.map((f) => ({
      icon: resolveIcon(f.iconName),
      title: f.title,
      description: f.description,
    }))}
    columns={3}
  />
</GroupBlock>
```

### **AFTER**
```tsx
<section className="wp-template-home__features">
  <Container>
    <WhyChooseUsPattern
      title={whySection.title}
      description={whySection.description}
      features={features.map((f) => ({
        icon: resolveIcon(f.iconName),
        title: f.title,
        description: f.description,
      }))}
      columns={3}
    />
  </Container>
</section>
```

**Changes:**
- `GroupBlock sectionStyle="section-feature-default"` → `<section className="wp-template-home__features">`
- Added `<Container>` wrapper (GroupBlock was providing this)

---

## 📝 SECTION 5: STATISTICS

### **BEFORE**
```tsx
<GroupBlock sectionStyle="section-statistics-default">
  <StatisticsMetricsPattern
    title={statsSection.title}
    description={statsSection.description}
    statistics={statistics.map((s) => ({
      value: s.value,
      suffix: s.suffix,
      label: s.label,
      icon: resolveIcon(s.iconName),
    }))}
    columns={4}
  />
</GroupBlock>
```

### **AFTER**
```tsx
<section className="wp-template-home__statistics">
  <Container>
    <StatisticsMetricsPattern
      title={statsSection.title}
      description={statsSection.description}
      statistics={statistics.map((s) => ({
        value: s.value,
        suffix: s.suffix,
        label: s.label,
        icon: resolveIcon(s.iconName),
      }))}
      columns={4}
    />
  </Container>
</section>
```

**Changes:**
- `GroupBlock sectionStyle="section-statistics-default"` → `<section className="wp-template-home__statistics">`
- Added `<Container>` wrapper

---

## 📝 SECTION 6: ACCOMMODATION

### **BEFORE**
```tsx
<section className="section-card-grid-alternate">
  <Container>
    <SectionHeader
      section={accommodationSection}
      icon={SECTION_ICON_MAP["accommodation"]}
    />

    <CardGrid columns={3}>
      {featuredAccommodation.map((property) => (
        <AccommodationCard
          key={property.id}
          accommodation={property}
          onClick={() => nav("/accommodation/" + property.slug)}
        />
      ))}
    </CardGrid>

    {accommodationSection.viewAllLabel &&
      accommodationSection.viewAllHref && (
        <div className="text-center mt-12">
          <Button
            variant="primary"
            size="default"
            onClick={() => nav(accommodationSection.viewAllHref!)}
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
          >
            {accommodationSection.viewAllLabel}
          </Button>
        </div>
      )}
  </Container>
</section>
```

### **AFTER**
```tsx
<section className="wp-template-home__accommodation">
  <Container>
    <SectionHeader
      section={accommodationSection}
      icon={SECTION_ICON_MAP["accommodation"]}
    />

    <div className="wp-template-home__accommodation-grid">
      {featuredAccommodation.map((property) => (
        <AccommodationCard
          key={property.id}
          accommodation={property}
          onClick={() => nav("/accommodation/" + property.slug)}
        />
      ))}
    </div>

    {accommodationSection.viewAllLabel &&
      accommodationSection.viewAllHref && (
        <div className="wp-template-home__view-all">
          <Button
            variant="primary"
            size="default"
            onClick={() => nav(accommodationSection.viewAllHref!)}
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
          >
            {accommodationSection.viewAllLabel}
          </Button>
        </div>
      )}
  </Container>
</section>
```

**Changes:**
- `className="section-card-grid-alternate"` → `className="wp-template-home__accommodation"`
- `CardGrid columns={3}` → `<div className="wp-template-home__accommodation-grid">`
- `className="text-center mt-12"` → `className="wp-template-home__view-all"`

---

## 📝 SECTION 7: TEAM

### **BEFORE**
```tsx
<section className="section-card-grid-default">
  <Container>
    <SectionHeader
      section={teamSection}
      icon={SECTION_ICON_MAP["team"]}
    />

    <CardGrid columns={3}>
      {featuredTeam.map((member) => (
        <TeamCard
          key={member.id}
          member={member}
          onClick={() => nav("/team/" + member.slug)}
        />
      ))}
    </CardGrid>

    {teamSection.viewAllLabel && teamSection.viewAllHref && (
      <div className="text-center mt-12">
        <Button
          variant="outline"
          size="default"
          onClick={() => nav(teamSection.viewAllHref!)}
          icon={<ArrowRight className="w-4 h-4" />}
          iconPosition="right"
        >
          {teamSection.viewAllLabel}
        </Button>
      </div>
    )}
  </Container>
</section>
```

### **AFTER**
```tsx
<section className="wp-template-home__team">
  <Container>
    <SectionHeader
      section={teamSection}
      icon={SECTION_ICON_MAP["team"]}
    />

    <div className="wp-template-home__team-grid">
      {featuredTeam.map((member) => (
        <TeamCard
          key={member.id}
          member={member}
          onClick={() => nav("/team/" + member.slug)}
        />
      ))}
    </div>

    {teamSection.viewAllLabel && teamSection.viewAllHref && (
      <div className="wp-template-home__view-all">
        <Button
          variant="outline"
          size="default"
          onClick={() => nav(teamSection.viewAllHref!)}
          icon={<ArrowRight className="w-4 h-4" />}
          iconPosition="right"
        >
          {teamSection.viewAllLabel}
        </Button>
      </div>
    )}
  </Container>
</section>
```

**Changes:**
- `className="section-card-grid-default"` → `className="wp-template-home__team"`
- `CardGrid columns={3}` → `<div className="wp-template-home__team-grid">`
- `className="text-center mt-12"` → `className="wp-template-home__view-all"`

---

## 📝 SECTION 8: TESTIMONIALS

### **BEFORE**
```tsx
<section className="section-card-grid-alternate">
  <Container>
    <div className="text-center mb-12">
      <h2 className="mb-4">{testimonialsSection.title}</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        {testimonialsSection.description}
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {featuredTestimonials.map((review) => (
        <ReviewCard
          key={review.id}
          review={{
            id: review.id,
            author: review.author,
            content: review.content,
            rating: review.rating,
            date: review.date,
            location: review.authorLocation,
            avatar: review.featuredImage,
          }}
          onClick={() => nav("/reviews/" + review.slug)}
        />
      ))}
    </div>

    {testimonialsSection.viewAllLabel &&
      testimonialsSection.viewAllHref && (
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="default"
            onClick={() => nav(testimonialsSection.viewAllHref!)}
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
          >
            {testimonialsSection.viewAllLabel}
          </Button>
        </div>
      )}
  </Container>
</section>
```

### **AFTER**
```tsx
<section className="wp-template-home__testimonials">
  <Container>
    <div className="wp-template-home__section-header">
      <h2 className="wp-template-home__section-title">
        {testimonialsSection.title}
      </h2>
      <p className="wp-template-home__section-description">
        {testimonialsSection.description}
      </p>
    </div>

    <div className="wp-template-home__testimonials-grid">
      {featuredTestimonials.map((review) => (
        <ReviewCard
          key={review.id}
          review={{
            id: review.id,
            author: review.author,
            content: review.content,
            rating: review.rating,
            date: review.date,
            location: review.authorLocation,
            avatar: review.featuredImage,
          }}
          onClick={() => nav("/reviews/" + review.slug)}
        />
      ))}
    </div>

    {testimonialsSection.viewAllLabel &&
      testimonialsSection.viewAllHref && (
        <div className="wp-template-home__view-all">
          <Button
            variant="outline"
            size="default"
            onClick={() => nav(testimonialsSection.viewAllHref!)}
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
          >
            {testimonialsSection.viewAllLabel}
          </Button>
        </div>
      )}
  </Container>
</section>
```

**Changes:**
- `className="section-card-grid-alternate"` → `className="wp-template-home__testimonials"`
- Inline header → WordPress CSS classes
- `className="grid grid-cols-1 md:grid-cols-3 gap-6"` → `className="wp-template-home__testimonials-grid"`
- `className="text-center mt-12"` → `className="wp-template-home__view-all"`

---

## 📝 SECTION 9: BLOG

### **BEFORE**
```tsx
<section className="section-card-grid-default">
  <Container>
    <div className="text-center mb-12">
      <h2 className="mb-4">{blogSection.title}</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        {blogSection.description}
      </p>
    </div>

    <CardGrid columns={3}>
      {featuredBlogPosts.map((post) => (
        <BlogCard
          key={post.id}
          post={post}
          onClick={() => nav("/blog/" + post.slug)}
        />
      ))}
    </CardGrid>

    {blogSection.viewAllLabel && blogSection.viewAllHref && (
      <div className="text-center mt-12">
        <Button
          variant="primary"
          size="default"
          onClick={() => nav(blogSection.viewAllHref!)}
          icon={<ArrowRight className="w-4 h-4" />}
          iconPosition="right"
        >
          {blogSection.viewAllLabel}
        </Button>
      </div>
    )}
  </Container>
</section>
```

### **AFTER**
```tsx
<section className="wp-template-home__blog">
  <Container>
    <div className="wp-template-home__section-header">
      <h2 className="wp-template-home__section-title">
        {blogSection.title}
      </h2>
      <p className="wp-template-home__section-description">
        {blogSection.description}
      </p>
    </div>

    <div className="wp-template-home__blog-grid">
      {featuredBlogPosts.map((post) => (
        <BlogCard
          key={post.id}
          post={post}
          onClick={() => nav("/blog/" + post.slug)}
        />
      ))}
    </div>

    {blogSection.viewAllLabel && blogSection.viewAllHref && (
      <div className="wp-template-home__view-all">
        <Button
          variant="primary"
          size="default"
          onClick={() => nav(blogSection.viewAllHref!)}
          icon={<ArrowRight className="w-4 h-4" />}
          iconPosition="right"
        >
          {blogSection.viewAllLabel}
        </Button>
      </div>
    )}
  </Container>
</section>
```

**Changes:**
- `className="section-card-grid-default"` → `className="wp-template-home__blog"`
- Inline header → WordPress CSS classes
- `CardGrid columns={3}` → `<div className="wp-template-home__blog-grid">`
- `className="text-center mt-12"` → `className="wp-template-home__view-all"`

---

## 📝 SECTION 10: NEWSLETTER

### **BEFORE**
```tsx
<GroupBlock sectionStyle="section-newsletter-default">
  <NewsletterSignupPattern
    title={newsletter.title}
    description={newsletter.description}
    variant="default"
    onSubmit={async (email) => {
      console.log("Newsletter signup:", email);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return true;
    }}
  />
</GroupBlock>
```

### **AFTER**
```tsx
<section className="wp-template-home__newsletter">
  <Container>
    <NewsletterSignupPattern
      title={newsletter.title}
      description={newsletter.description}
      variant="default"
      onSubmit={async (email) => {
        console.log("Newsletter signup:", email);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return true;
      }}
    />
  </Container>
</section>
```

**Changes:**
- `GroupBlock sectionStyle="section-newsletter-default"` → `<section className="wp-template-home__newsletter">`
- Added `<Container>` wrapper

---

## 📝 SECTION 11: FINAL CTA

### **BEFORE**
```tsx
<section className="section-cta-primary">
  <Container>
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="mb-4">{cta.title}</h2>
      <p className="mb-8 opacity-95">{cta.description}</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button
          variant="secondary"
          size="lg"
          onClick={() => nav(cta.primaryButtonHref)}
          icon={<Compass className="w-5 h-5" />}
          iconPosition="left"
        >
          {cta.primaryButtonLabel}
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={() => nav(cta.secondaryButtonHref)}
          className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
        >
          {cta.secondaryButtonLabel}
        </Button>
      </div>
    </div>
  </Container>
</section>
```

### **AFTER**
```tsx
<section className="wp-template-home__cta">
  <Container>
    <div className="wp-template-home__section-header">
      <h2 className="wp-template-home__section-title">{cta.title}</h2>
      <p className="wp-template-home__section-description opacity-95">
        {cta.description}
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
        <Button
          variant="secondary"
          size="lg"
          onClick={() => nav(cta.primaryButtonHref)}
          icon={<Compass className="w-5 h-5" />}
          iconPosition="left"
        >
          {cta.primaryButtonLabel}
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={() => nav(cta.secondaryButtonHref)}
          className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
        >
          {cta.secondaryButtonLabel}
        </Button>
      </div>
    </div>
  </Container>
</section>
```

**Changes:**
- `className="section-cta-primary"` → `className="wp-template-home__cta"`
- `max-w-3xl mx-auto text-center` → Moved into section header
- `mb-4`, `mb-8` → WordPress CSS classes + manual spacing for buttons

---

## 🎯 COMPLETE CLASS MAPPING

### **Section Wrappers**
| Before | After |
|--------|-------|
| `GroupBlock sectionStyle="section-card-grid-default"` | `<section className="wp-template-home__tours">` |
| `section-card-grid-alternate bg-primary/5` | `wp-template-home__destinations` |
| `section-card-grid-alternate` | `wp-template-home__accommodation` |
| `section-card-grid-default` | `wp-template-home__team` |
| `section-card-grid-alternate` | `wp-template-home__testimonials` |
| `section-card-grid-default` | `wp-template-home__blog` |
| `GroupBlock sectionStyle="section-feature-default"` | `<section className="wp-template-home__features">` |
| `GroupBlock sectionStyle="section-statistics-default"` | `<section className="wp-template-home__statistics">` |
| `GroupBlock sectionStyle="section-newsletter-default"` | `<section className="wp-template-home__newsletter">` |
| `section-cta-primary` | `wp-template-home__cta` |

### **Grid Layouts**
| Before | After |
|--------|-------|
| `CardGrid columns={3}` | `<div className="wp-template-home__tours-grid">` |
| `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6` | `wp-template-home__destinations-grid` |
| `CardGrid columns={3}` | `wp-template-home__accommodation-grid` |
| `CardGrid columns={3}` | `wp-template-home__team-grid` |
| `grid grid-cols-1 md:grid-cols-3 gap-6` | `wp-template-home__testimonials-grid` |
| `CardGrid columns={3}` | `wp-template-home__blog-grid` |

### **Section Headers**
| Before | After |
|--------|-------|
| `text-center mb-12` | `wp-template-home__section-header` |
| `mb-4` (on h2) | `wp-template-home__section-title` |
| `text-muted-foreground max-w-2xl mx-auto` | `wp-template-home__section-description` |

### **View All Buttons**
| Before | After |
|--------|-------|
| `text-center mt-12` | `wp-template-home__view-all` |

---

## ✅ TESTING CHECKLIST

After migration, verify:

- [ ] Main wrapper uses `.wp-template-home`
- [ ] All 11 sections migrated
- [ ] All grids use WordPress classes
- [ ] All section headers consistent
- [ ] All "View All" buttons wrapped correctly
- [ ] Visual appearance unchanged
- [ ] Responsive behavior maintained
- [ ] Dark mode works
- [ ] No console errors

---

**Status:** ✅ READY TO USE  
**Last Updated:** February 24, 2026  
**Companion Guide:** `/tasks/HOMEPAGE-MIGRATION-GUIDE.md`
