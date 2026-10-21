/**
 * Prisma Seed Script
 * Run with: bunx prisma db seed
 *
 * Creates a demo domain with a chatbot for local development.
 * Do NOT run in production.
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Clean slate for development
  await prisma.chatMessage.deleteMany();
  await prisma.chatRoom.deleteMany();
  await prisma.customerResponses.deleteMany();
  await prisma.bookings.deleteMany();
  await prisma.customer.deleteMany();
  await prisma.product.deleteMany();
  await prisma.filterQuestions.deleteMany();
  await prisma.helpDesk.deleteMany();
  await prisma.chatBot.deleteMany();
  await prisma.campaign.deleteMany();
  await prisma.domain.deleteMany();
  await prisma.billings.deleteMany();
  await prisma.user.deleteMany();

  // Seed a demo user
  const user = await prisma.user.create({
    data: {
      fullname: "Demo User",
      clerkId: "clerk_demo_user_id",
      type: "OWNER",
      subscription: {
        create: {
          plan: "PRO",
          credits: 50,
        },
      },
    },
  });

  console.log(`✅ Created user: ${user.fullname}`);

  // Seed a demo domain with chatbot
  const domain = await prisma.domain.create({
    data: {
      name: "demo.kaia.ai",
      icon: "",
      userId: user.id,
      chatBot: {
        create: {
          welcomeMessage:
            "Hello! 👋 I'm Kaia, your AI assistant. How can I help you today?",
          background: "#ffffff",
          textColor: "#000000",
          helpdesk: false,
        },
      },
      helpdesk: {
        createMany: {
          data: [
            {
              question: "What is Kaia?",
              answer:
                "Kaia is an AI-powered sales assistant that you can embed into any website to automate customer interactions, book appointments, and drive sales 24/7.",
            },
            {
              question: "How do I get started?",
              answer:
                "Simply sign up, add your domain, copy the embed snippet, and paste it into your website's HTML. Your AI chatbot will be live in minutes!",
            },
            {
              question: "Is there a free plan?",
              answer:
                "Yes! The Standard plan is completely free and includes 1 domain, 10 contacts, and 10 emails per month. No credit card required.",
            },
          ],
        },
      },
      filterQuestions: {
        createMany: {
          data: [
            { question: "What is your name?" },
            { question: "What is your email address?" },
            { question: "How can we help you today?" },
          ],
        },
      },
    },
  });

  console.log(`✅ Created domain: ${domain.name}`);
  console.log(
    "\n🚀 Seed complete! You can now log in with Clerk user ID: clerk_demo_user_id",
  );
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
