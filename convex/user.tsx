import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getTask = query({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    const task = await ctx.db.query("user").filter((q)=>q.eq(q.field("email"),args.email)).collect()

    return task;
  },
});

export const createTask = mutation({
  args: { email: v.string(),
    name: v.string() ,
    img: v.string()  },
  handler: async (ctx, args) => {
   return await ctx.db.insert("user", args);

  },
});