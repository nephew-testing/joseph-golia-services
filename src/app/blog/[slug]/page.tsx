import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllPosts, getRelatedPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/config";
import Link from "next/link";

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() { return getAllPosts().map(p => ({ slug: p.slug })); }

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.description, openGraph: { title: post.title, description: post.description, type: "article", publishedTime: post.date } };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || !post.published) notFound();
  const related = getRelatedPosts(post.slug, post.category);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BlogPosting", headline: post.title, description: post.description, datePublished: post.date, author: { "@type": "Person", name: post.author }, publisher: { "@type": "Organization", name: siteConfig.business.name } }) }} />
      <article className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">{post.category}</span>
              <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
              <span>&middot;</span>
              <span>{post.readingTime}</span>
            </div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight">{post.title}</h1>
            <p className="mt-3 text-lg text-muted-foreground">{post.description}</p>
          </div>
          <div className="prose prose-lg max-w-none"><MDXRemote source={post.content} /></div>
          <div className="mt-12 rounded-xl bg-muted p-8 text-center">
            <h3 className="text-xl font-bold">Need help?</h3>
            <p className="mt-2 text-muted-foreground">Contact {siteConfig.business.name} today.</p>
            <div className="mt-4 flex justify-center gap-3">
              <Link href="/contact" className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90">Get in Touch</Link>
              <a href={"tel:" + siteConfig.business.phone.replace(/\D/g, "")} className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium hover:bg-background">Call {siteConfig.business.phone}</a>
            </div>
          </div>
        </div>
      </article>
      {related.length > 0 && (
        <section className="border-t border-border px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold">Related Articles</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {related.map(r => (
                <Link key={r.slug} href={"/blog/" + r.slug} className="group rounded-xl border border-border p-5 hover:shadow-md">
                  <p className="text-xs text-muted-foreground">{r.category}</p>
                  <h3 className="mt-1 font-semibold group-hover:text-primary">{r.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{r.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
