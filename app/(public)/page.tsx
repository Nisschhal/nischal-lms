import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import React from "react"

interface featuresProps {
  title: string
  description: string
  icon: string
}

const features: featuresProps[] = [
  {
    title: "Comprehensive Course",
    description:
      "Access a wide range of courses covering various subjects and topics, including programming, data science, business, and more.",
    icon: "📚",
  },
  {
    title: "Interactive Learning",
    description:
      "Engage with interactive content, quizzes, and assignments to enhance your learning experience.",
    icon: "🎮",
  },
  {
    title: "Progress Tracking",
    description:
      "Monitor your progress and stay motivated with real-time updates on your learning journey.",
    icon: "📊",
  },
  {
    title: "Community Engagement",
    description:
      "Connect with fellow learners, share knowledge, and collaborate on projects with like-minded individuals.",
    icon: "👥",
  },
]

const PublicPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge variant={"outline"}>The Future of Online Education</Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Elevate your Learning Experience
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Discover a new way to learn with our modern, interacive learning
            maangement system. Access high-quality courses anytime, anywhere.
          </p>

          {/* CTA */}
          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <Link
              href={"/courses"}
              className={buttonVariants({
                size: "lg",
              })}
            >
              Explore Courses
            </Link>
            <Link
              href={"/login"}
              className={buttonVariants({
                variant: "outline",
                size: "lg",
              })}
            >
              Sign in
            </Link>
          </div>
        </div>
      </section>

      {/* Courses Section */}

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="text-4xl mb-4">{feature.icon}</div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </>
  )
}

export default PublicPage
