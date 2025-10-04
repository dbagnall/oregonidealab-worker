PRAGMA defer_foreign_keys=TRUE;
CREATE TABLE `users_sessions` (
	`_order` integer NOT NULL,
	`_parent_id` integer NOT NULL,
	`id` text PRIMARY KEY NOT NULL,
	`created_at` text,
	`expires_at` text NOT NULL,
	FOREIGN KEY (`_parent_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
INSERT INTO "users_sessions" VALUES(1,1,'c5acbb15-995d-46df-a713-ec192268e8b1','2025-10-04T01:10:39.611Z','2025-10-04T03:10:39.611Z');
CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`role` text DEFAULT 'admin' NOT NULL,
	`updated_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	`created_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	`email` text NOT NULL,
	`reset_password_token` text,
	`reset_password_expiration` text,
	`salt` text,
	`hash` text,
	`login_attempts` numeric DEFAULT 0,
	`lock_until` text
);
INSERT INTO "users" VALUES(1,'admin','2025-10-04T01:10:39.612Z','2025-10-03T15:38:32.831Z','admin@oregonidealab.com',NULL,NULL,'6fde8e3aeeef097968c5033acd630ae5bd19bdce748f9fbf885df5649860a298','13d6caf5ad5fe72ddbe3c4d05d89b1784de2be6c6e80c0091e9a4456698e1d18c29aed8f2d72d53d91b33eda7ce2197ced666b63ebd0879cbe1c70d0d5039830ba0a4ddc6b75f8956ef1964f2a1310893a695850c07e591d6128b9ba2b76a1e66953a22812f150ea4fb172d980d9f0cbdb8617e70580031961107800ef0f177bc71a541380579603c61929020c9679b25a8f5ed5132a123dd58601b5c4e387ce70bd195756cf4e0380f1966863e0cceadc5c746ec59f7e2c7b352c601ffbb516f66470ea99f538cd4f702973a2dd5ada4e55a7e4813336cbf890b8ef763f00d7f89400f4639de6ad61f57d698b6f0a22790f9ab61b6213f95769d346463282ed52faf83aa59a437a33858eb50075ab01357fe8515a1d601ca9c72e81b98424c3f9d041df0c76783aba549500bd93d9c079c337e8aaf9e70a062f308aea9fba12b6563b009862e4b18751e39b34f5d19fe66decb9a1b60f1815da751b489aee18cb5c256958de4753518e7c7c71295fe05b89c01d2cd48f318784b7436dfb2458ee255a4ac044016210e087626db0486c532c53e60052089c3faef84112e5408922b37a67a89e235758f500a1a07e034b6bd18ae85a34f34459196e0a376328362e1884d27ec73cbc35b60bdcff218fe64d6f9449d2a38ea37d137f1580e8e9e17aafc5bbcbfb288cac603c480caf4425eb3f1c69eb41155e913a22a0551e1b1a',0,NULL);
CREATE TABLE `posts` (
	`id` integer PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`slug` text NOT NULL,
	`status` text DEFAULT 'draft' NOT NULL,
	`published_date` text NOT NULL,
	`author` text DEFAULT 'Oregon Idea Lab' NOT NULL,
	`category_id` integer NOT NULL,
	`featured_image_id` integer,
	`excerpt` text NOT NULL,
	`content` text NOT NULL,
	`seo_title` text,
	`seo_description` text,
	`updated_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	`created_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (`featured_image_id`) REFERENCES `media`(`id`) ON UPDATE no action ON DELETE set null
);
INSERT INTO "posts" VALUES(1,'The Power of Direct Democracy in Oregon','power-of-direct-democracy','published','2025-01-15T00:00:00.000Z','Oregon Idea Lab Team',1,NULL,'Oregon has a rich history of direct democracy through ballot initiatives. Learn how citizens can shape policy and hold government accountable through the initiative process.','{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","text":"Oregon''s initiative and referendum system, established in 1902, was one of the first in the United States. This system allows citizens to propose and enact laws directly, bypassing the legislature when necessary.","format":0,"detail":0,"mode":"normal","style":""}],"direction":"ltr","format":"","indent":0},{"type":"heading","tag":"h2","children":[{"type":"text","text":"How the Initiative Process Works","format":0,"detail":0,"mode":"normal","style":""}],"direction":"ltr","format":"","indent":0},{"type":"paragraph","children":[{"type":"text","text":"Citizens can propose new laws or amendments to the Oregon Constitution by gathering signatures from registered voters. Once enough valid signatures are collected, the measure goes on the ballot for voters to decide.","format":0,"detail":0,"mode":"normal","style":""}],"direction":"ltr","format":"","indent":0},{"type":"heading","tag":"h2","children":[{"type":"text","text":"Why Direct Democracy Matters","format":0,"detail":0,"mode":"normal","style":""}],"direction":"ltr","format":"","indent":0},{"type":"paragraph","children":[{"type":"text","text":"Direct democracy gives citizens the power to address issues that elected officials may be reluctant to tackle. It ensures that government remains responsive to the will of the people.","format":0,"detail":0,"mode":"normal","style":""}],"direction":"ltr","format":"","indent":0}],"direction":"ltr","format":"","indent":0}}',NULL,NULL,'2025-10-03T15:38:43.763Z','2025-10-03T15:38:43.763Z');
INSERT INTO "posts" VALUES(2,'Building Stronger Communities Through Civic Engagement','building-stronger-communities','published','2025-01-20T00:00:00.000Z','Sarah Martinez',2,NULL,'Discover how communities across Oregon are coming together to create positive change through grassroots organizing and civic participation.','{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","text":"From Portland to Pendleton, Oregonians are finding innovative ways to strengthen their communities through civic engagement. These grassroots efforts demonstrate the power of collective action.","format":0,"detail":0,"mode":"normal","style":""}],"direction":"ltr","format":"","indent":0},{"type":"heading","tag":"h2","children":[{"type":"text","text":"Community-Powered Solutions","format":0,"detail":0,"mode":"normal","style":""}],"direction":"ltr","format":"","indent":0},{"type":"paragraph","children":[{"type":"text","text":"Local organizing efforts are addressing issues like affordable housing, climate action, and education funding. These initiatives show that change starts at the community level.","format":0,"detail":0,"mode":"normal","style":""}],"direction":"ltr","format":"","indent":0}],"direction":"ltr","format":"","indent":0}}',NULL,NULL,'2025-10-03T15:38:43.767Z','2025-10-03T15:38:43.767Z');
INSERT INTO "posts" VALUES(3,'Understanding Campaign Finance Reform','campaign-finance-reform','published','2025-01-25T00:00:00.000Z','Michael Chen',3,NULL,'An in-depth look at campaign finance laws in Oregon and why reform is essential for a fair democracy.','{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","text":"Oregon is one of only a handful of states without limits on campaign contributions. This policy analysis examines the impact of unlimited money in politics and explores potential reforms.","format":0,"detail":0,"mode":"normal","style":""}],"direction":"ltr","format":"","indent":0},{"type":"heading","tag":"h2","children":[{"type":"text","text":"The Current State of Campaign Finance","format":0,"detail":0,"mode":"normal","style":""}],"direction":"ltr","format":"","indent":0},{"type":"paragraph","children":[{"type":"text","text":"Without contribution limits, wealthy donors and special interests can exert disproportionate influence over elections and policy decisions. This undermines the principle of equal representation.","format":0,"detail":0,"mode":"normal","style":""}],"direction":"ltr","format":"","indent":0}],"direction":"ltr","format":"","indent":0}}',NULL,NULL,'2025-10-03T15:38:43.769Z','2025-10-03T15:38:43.769Z');
CREATE TABLE `categories` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`slug` text NOT NULL,
	`description` text,
	`updated_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	`created_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
);
INSERT INTO "categories" VALUES(1,'Democracy & Governance','democracy-governance','Updates on democratic reforms and government accountability','2025-10-03T15:38:43.756Z','2025-10-03T15:38:43.756Z');
INSERT INTO "categories" VALUES(2,'Community Initiatives','community-initiatives','Stories from communities working toward positive change','2025-10-03T15:38:43.759Z','2025-10-03T15:38:43.759Z');
INSERT INTO "categories" VALUES(3,'Policy Analysis','policy-analysis','In-depth analysis of policies affecting Oregonians','2025-10-03T15:38:43.760Z','2025-10-03T15:38:43.760Z');
INSERT INTO "categories" VALUES(4,'Updates & News','updates-news','Latest news and updates from Oregon Idea Lab','2025-10-03T15:38:43.761Z','2025-10-03T15:38:43.761Z');
CREATE TABLE `navigation_items` (
	`_order` integer NOT NULL,
	`_parent_id` integer NOT NULL,
	`id` text PRIMARY KEY NOT NULL,
	`label` text NOT NULL,
	`href` text NOT NULL,
	FOREIGN KEY (`_parent_id`) REFERENCES `navigation`(`id`) ON UPDATE no action ON DELETE cascade
);
INSERT INTO "navigation_items" VALUES(1,1,'68dfedf83ccce0d30be65ee3','Home','/#home');
INSERT INTO "navigation_items" VALUES(2,1,'68dfedf83ccce0d30be65ee4','Key Issues','/#key-issues');
INSERT INTO "navigation_items" VALUES(3,1,'68dfedf83ccce0d30be65ee5','Who We Are','/#who-we-are');
INSERT INTO "navigation_items" VALUES(4,1,'68dfedf83ccce0d30be65ee6','What We Do','/#what-we-do');
INSERT INTO "navigation_items" VALUES(5,1,'68dfeeef2901391eb7458857','News','/blog');
CREATE TABLE `navigation` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`cta_button_enabled` integer DEFAULT true,
	`cta_button_label` text DEFAULT 'Donate' NOT NULL,
	`cta_button_href` text DEFAULT '#donate' NOT NULL,
	`updated_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	`created_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
);
INSERT INTO "navigation" VALUES(1,'Main Navigation',1,'Donate','#donate','2025-10-03T16:02:57.435Z','2025-10-03T15:38:32.838Z');
CREATE TABLE `pages` (
	`id` integer PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`slug` text NOT NULL,
	`content` text NOT NULL,
	`updated_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	`created_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
);
INSERT INTO "pages" VALUES(1,'Privacy Policy','privacy-policy','{"root":{"type":"root","children":[{"type":"heading","tag":"h1","children":[{"type":"text","text":"Privacy Policy"}]},{"type":"paragraph","children":[{"type":"text","text":"Last updated: 10/3/2025"}]},{"type":"heading","tag":"h2","children":[{"type":"text","text":"1. Introduction"}]},{"type":"paragraph","children":[{"type":"text","text":"Oregon Idea Lab (\"we\", \"our\", or \"us\") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website."}]},{"type":"heading","tag":"h2","children":[{"type":"text","text":"2. Information We Collect"}]},{"type":"paragraph","children":[{"type":"text","text":"We may collect information about you in a variety of ways. The information we may collect on the Site includes:"}]},{"type":"heading","tag":"h3","children":[{"type":"text","text":"Personal Data"}]},{"type":"paragraph","children":[{"type":"text","text":"Personally identifiable information, such as your name, email address, and telephone number, that you voluntarily give to us when you register with the Site, sign up for our newsletter, or when you choose to participate in various activities related to the Site."}]},{"type":"heading","tag":"h3","children":[{"type":"text","text":"Derivative Data"}]},{"type":"paragraph","children":[{"type":"text","text":"Information our servers automatically collect when you access the Site, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the Site."}]},{"type":"heading","tag":"h2","children":[{"type":"text","text":"3. Use of Your Information"}]},{"type":"paragraph","children":[{"type":"text","text":"Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:"}]},{"type":"list","tag":"ul","children":[{"type":"listitem","children":[{"type":"text","text":"Send you newsletters and information about our initiatives"}]},{"type":"listitem","children":[{"type":"text","text":"Respond to your inquiries and offer customer support"}]},{"type":"listitem","children":[{"type":"text","text":"Monitor and analyze usage and trends to improve your experience"}]},{"type":"listitem","children":[{"type":"text","text":"Prevent fraudulent transactions"}]}]},{"type":"heading","tag":"h2","children":[{"type":"text","text":"4. Disclosure of Your Information"}]},{"type":"paragraph","children":[{"type":"text","text":"We may share information we have collected about you in certain situations. Your information may be disclosed as follows:"}]},{"type":"heading","tag":"h3","children":[{"type":"text","text":"By Law or to Protect Rights"}]},{"type":"paragraph","children":[{"type":"text","text":"If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation."}]},{"type":"heading","tag":"h2","children":[{"type":"text","text":"5. Contact Us"}]},{"type":"paragraph","children":[{"type":"text","text":"If you have questions or comments about this Privacy Policy, please contact us at: info@oregonidealab.com"}]}]}}','2025-10-03T15:38:38.934Z','2025-10-03T15:38:38.934Z');
INSERT INTO "pages" VALUES(2,'Terms of Service','terms-of-service','{"root":{"type":"root","children":[{"type":"heading","tag":"h1","children":[{"type":"text","text":"Terms of Service"}]},{"type":"paragraph","children":[{"type":"text","text":"Last updated: 10/3/2025"}]},{"type":"heading","tag":"h2","children":[{"type":"text","text":"1. Agreement to Terms"}]},{"type":"paragraph","children":[{"type":"text","text":"By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement."}]},{"type":"heading","tag":"h2","children":[{"type":"text","text":"2. Use License"}]},{"type":"paragraph","children":[{"type":"text","text":"Permission is granted to temporarily download one copy of the materials (information or software) on Oregon Idea Lab''s website for personal, non-commercial transitory viewing only."}]},{"type":"heading","tag":"h2","children":[{"type":"text","text":"3. Disclaimer"}]},{"type":"paragraph","children":[{"type":"text","text":"The materials on Oregon Idea Lab''s website are provided on an \"as is\" basis. Oregon Idea Lab makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."}]},{"type":"heading","tag":"h2","children":[{"type":"text","text":"4. Limitations"}]},{"type":"paragraph","children":[{"type":"text","text":"In no event shall Oregon Idea Lab or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Oregon Idea Lab''s website."}]},{"type":"heading","tag":"h2","children":[{"type":"text","text":"5. Contact Information"}]},{"type":"paragraph","children":[{"type":"text","text":"If you have any questions about these Terms of Service, please contact us at: info@oregonidealab.com"}]}]}}','2025-10-03T15:38:38.937Z','2025-10-03T15:38:38.937Z');
INSERT INTO "pages" VALUES(3,'Cookie Policy','cookie-policy','{"root":{"type":"root","children":[{"type":"heading","tag":"h1","children":[{"type":"text","text":"Cookie Policy"}]},{"type":"paragraph","children":[{"type":"text","text":"Last updated: 10/3/2025"}]},{"type":"heading","tag":"h2","children":[{"type":"text","text":"What Are Cookies"}]},{"type":"paragraph","children":[{"type":"text","text":"Cookies are small text files that are placed on your computer by websites that you visit. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site."}]},{"type":"heading","tag":"h2","children":[{"type":"text","text":"How We Use Cookies"}]},{"type":"paragraph","children":[{"type":"text","text":"We use cookies for the following purposes:"}]},{"type":"list","tag":"ul","children":[{"type":"listitem","children":[{"type":"text","text":"Analytics: To understand how visitors use our website","format":1},{"type":"text","text":" - We use Google Analytics to collect anonymous information about how visitors interact with our site."}]},{"type":"listitem","children":[{"type":"text","text":"Functionality: To remember your preferences","format":1},{"type":"text","text":" - Such as cookie consent choices."}]}]},{"type":"heading","tag":"h2","children":[{"type":"text","text":"Types of Cookies We Use"}]},{"type":"heading","tag":"h3","children":[{"type":"text","text":"Essential Cookies"}]},{"type":"paragraph","children":[{"type":"text","text":"These cookies are necessary for the website to function and cannot be switched off in our systems."}]},{"type":"heading","tag":"h3","children":[{"type":"text","text":"Analytics Cookies"}]},{"type":"paragraph","children":[{"type":"text","text":"These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site."}]},{"type":"heading","tag":"h2","children":[{"type":"text","text":"How to Control Cookies"}]},{"type":"paragraph","children":[{"type":"text","text":"You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site."}]},{"type":"heading","tag":"h2","children":[{"type":"text","text":"Contact Us"}]},{"type":"paragraph","children":[{"type":"text","text":"If you have any questions about our use of cookies, please contact us at: info@oregonidealab.com"}]}]}}','2025-10-03T15:38:38.939Z','2025-10-03T15:38:38.938Z');
CREATE TABLE `media` (
	`id` integer PRIMARY KEY NOT NULL,
	`alt` text,
	`updated_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	`created_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	`url` text,
	`thumbnail_u_r_l` text,
	`filename` text,
	`mime_type` text,
	`filesize` numeric,
	`width` numeric,
	`height` numeric,
	`focal_x` numeric,
	`focal_y` numeric,
	`sizes_thumbnail_url` text,
	`sizes_thumbnail_width` numeric,
	`sizes_thumbnail_height` numeric,
	`sizes_thumbnail_mime_type` text,
	`sizes_thumbnail_filesize` numeric,
	`sizes_thumbnail_filename` text,
	`sizes_card_url` text,
	`sizes_card_width` numeric,
	`sizes_card_height` numeric,
	`sizes_card_mime_type` text,
	`sizes_card_filesize` numeric,
	`sizes_card_filename` text,
	`sizes_tablet_url` text,
	`sizes_tablet_width` numeric,
	`sizes_tablet_height` numeric,
	`sizes_tablet_mime_type` text,
	`sizes_tablet_filesize` numeric,
	`sizes_tablet_filename` text
);
INSERT INTO "media" VALUES(1,NULL,'2025-10-04T01:12:03.419Z','2025-10-04T01:12:03.418Z',NULL,NULL,'Coos 1.jpg','image/jpeg',433450,1920,759,50,50,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
CREATE TABLE `payload_locked_documents` (
	`id` integer PRIMARY KEY NOT NULL,
	`global_slug` text,
	`updated_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	`created_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
);
CREATE TABLE `payload_locked_documents_rels` (
	`id` integer PRIMARY KEY NOT NULL,
	`order` integer,
	`parent_id` integer NOT NULL,
	`path` text NOT NULL,
	`users_id` integer,
	`posts_id` integer,
	`categories_id` integer,
	`navigation_id` integer,
	`pages_id` integer,
	`media_id` integer,
	FOREIGN KEY (`parent_id`) REFERENCES `payload_locked_documents`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`users_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`posts_id`) REFERENCES `posts`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`categories_id`) REFERENCES `categories`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`navigation_id`) REFERENCES `navigation`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`pages_id`) REFERENCES `pages`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`media_id`) REFERENCES `media`(`id`) ON UPDATE no action ON DELETE cascade
);
CREATE TABLE `payload_preferences` (
	`id` integer PRIMARY KEY NOT NULL,
	`key` text,
	`value` text,
	`updated_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	`created_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
);
INSERT INTO "payload_preferences" VALUES(1,'collection-pages','{"limit":10}','2025-10-03T15:42:02.144Z','2025-10-03T15:42:02.144Z');
INSERT INTO "payload_preferences" VALUES(2,'collection-posts','{}','2025-10-03T15:42:04.556Z','2025-10-03T15:42:04.556Z');
INSERT INTO "payload_preferences" VALUES(3,'collection-users','{}','2025-10-03T15:42:17.123Z','2025-10-03T15:42:17.123Z');
INSERT INTO "payload_preferences" VALUES(4,'collection-categories','{}','2025-10-03T15:42:25.895Z','2025-10-03T15:42:25.895Z');
INSERT INTO "payload_preferences" VALUES(5,'collection-navigation','{"editViewType":"default"}','2025-10-03T15:42:36.008Z','2025-10-03T15:42:33.097Z');
INSERT INTO "payload_preferences" VALUES(6,'collection-media','{"editViewType":"default"}','2025-10-04T01:11:22.860Z','2025-10-04T01:10:46.103Z');
CREATE TABLE `payload_preferences_rels` (
	`id` integer PRIMARY KEY NOT NULL,
	`order` integer,
	`parent_id` integer NOT NULL,
	`path` text NOT NULL,
	`users_id` integer,
	FOREIGN KEY (`parent_id`) REFERENCES `payload_preferences`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`users_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
INSERT INTO "payload_preferences_rels" VALUES(1,NULL,1,'user',1);
INSERT INTO "payload_preferences_rels" VALUES(2,NULL,2,'user',1);
INSERT INTO "payload_preferences_rels" VALUES(3,NULL,3,'user',1);
INSERT INTO "payload_preferences_rels" VALUES(4,NULL,4,'user',1);
INSERT INTO "payload_preferences_rels" VALUES(5,NULL,5,'user',1);
INSERT INTO "payload_preferences_rels" VALUES(6,NULL,6,'user',1);
CREATE TABLE `payload_migrations` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text,
	`batch` numeric,
	`updated_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	`created_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
);
INSERT INTO "payload_migrations" VALUES(1,'dev',-1,'2025-10-04 01:33:36','2025-10-03T15:38:32.754Z');
INSERT INTO "payload_migrations" VALUES(2,'20250929_111647',1,'2025-10-04T01:27:19.616Z','2025-10-04T01:27:19.615Z');
INSERT INTO "payload_migrations" VALUES(3,'20251004_011314',1,'2025-10-04T01:39:20.643Z','2025-10-04T01:39:20.643Z');
CREATE TABLE `homepage_how_we_work_features` (
	`_order` integer NOT NULL,
	`_parent_id` integer NOT NULL,
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`illustration_id` integer,
	FOREIGN KEY (`illustration_id`) REFERENCES `media`(`id`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (`_parent_id`) REFERENCES `homepage`(`id`) ON UPDATE no action ON DELETE cascade
);
INSERT INTO "homepage_how_we_work_features" VALUES(1,1,'68dfedf83ccce0d30be65ee7','Direct Democracy','We go directly to Oregon voters through ballot initiatives, bypassing politicians who won''t act on popular ideas.',NULL);
INSERT INTO "homepage_how_we_work_features" VALUES(2,1,'68dfedf83ccce0d30be65ee8','Community Powered','Ideas come from Oregonians, not special interests. We build coalitions across the political spectrum.',NULL);
INSERT INTO "homepage_how_we_work_features" VALUES(3,1,'68dfedf83ccce0d30be65ee9','Transparent Process','Every step is documented and open for public review. We believe in accountability from start to finish.',NULL);
CREATE TABLE `homepage_why_change_points` (
	`_order` integer NOT NULL,
	`_parent_id` integer NOT NULL,
	`id` text PRIMARY KEY NOT NULL,
	`text` text NOT NULL,
	FOREIGN KEY (`_parent_id`) REFERENCES `homepage`(`id`) ON UPDATE no action ON DELETE cascade
);
INSERT INTO "homepage_why_change_points" VALUES(1,1,'68dfedf83ccce0d30be65eea','{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","text":"Oregon''s government is "},{"type":"text","text":"unaccountable","format":1},{"type":"text","text":" to its people."}]}]}}');
INSERT INTO "homepage_why_change_points" VALUES(2,1,'68dfedf83ccce0d30be65eeb','{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","text":"Elected officials are supposed to serve the many, not the few. "},{"type":"text","text":"Politicians won''t fix our problems.","format":1}]}]}}');
INSERT INTO "homepage_why_change_points" VALUES(3,1,'68dfedf83ccce0d30be65eec','{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","text":"The solution to problems in a democracy is "},{"type":"text","text":"more democracy","format":1},{"type":"text","text":". In Oregon, this means going around the politicians directly to the people through the initiative petition process."}]}]}}');
INSERT INTO "homepage_why_change_points" VALUES(4,1,'68dfedf83ccce0d30be65eed','{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","text":"There are plenty of "},{"type":"text","text":"practical solutions","format":1},{"type":"text","text":" to our problems that aren''t blinded by ideology or subject to the whims of political parties and institutional politics."}]}]}}');
INSERT INTO "homepage_why_change_points" VALUES(5,1,'68dfedf83ccce0d30be65eee','{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","text":"On issue after issue, there are practical ideas "},{"type":"text","text":"the vast majority of Oregonians support","format":1},{"type":"text","text":" that have no chance of moving in Salem."}]}]}}');
CREATE TABLE `homepage_key_issues_issues` (
	`_order` integer NOT NULL,
	`_parent_id` integer NOT NULL,
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	FOREIGN KEY (`_parent_id`) REFERENCES `homepage`(`id`) ON UPDATE no action ON DELETE cascade
);
INSERT INTO "homepage_key_issues_issues" VALUES(1,1,'68dfedf83ccce0d30be65eef','Public Safety','We are caught between those who want to criminalize homelessness and those who believe we have no right to tell anyone anything to do.');
INSERT INTO "homepage_key_issues_issues" VALUES(2,1,'68dfedf83ccce0d30be65ef0','Housing','We are caught between those who want no building standards and those who want to make building impossible.');
INSERT INTO "homepage_key_issues_issues" VALUES(3,1,'68dfedf83ccce0d30be65ef1','Election Reform','We are caught between those who want all money out of politics, and those who believe there should be no limits.');
INSERT INTO "homepage_key_issues_issues" VALUES(4,1,'68dfedf83ccce0d30be65ef2','Government Accountability','We are caught between those who think government should be torn down, and those who think government is the answer to everything.');
CREATE TABLE `homepage_gallery_images` (
	`_order` integer NOT NULL,
	`_parent_id` integer NOT NULL,
	`id` text PRIMARY KEY NOT NULL,
	`image_id` integer NOT NULL,
	`alt` text NOT NULL,
	FOREIGN KEY (`image_id`) REFERENCES `media`(`id`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (`_parent_id`) REFERENCES `homepage`(`id`) ON UPDATE no action ON DELETE cascade
);
CREATE TABLE `homepage` (
	`id` integer PRIMARY KEY NOT NULL,
	`hero_title` text DEFAULT 'The solution to problems in a democracy is more democracy' NOT NULL,
	`hero_subtitle` text DEFAULT 'Join thousands of Oregonians working for practical solutions' NOT NULL,
	`hero_background_image_id` integer,
	`hero_show_form` integer DEFAULT true,
	`hero_form_title` text DEFAULT 'Get Involved',
	`hero_form_subtitle` text DEFAULT 'Sign up to receive updates on our initiatives',
	`how_we_work_title` text DEFAULT 'How We Work' NOT NULL,
	`how_we_work_subtitle` text DEFAULT 'Three principles that guide everything we do' NOT NULL,
	`why_change_title` text DEFAULT 'Why Oregon Needs Change' NOT NULL,
	`key_issues_title` text DEFAULT 'Key Issues Facing Oregon' NOT NULL,
	`key_issues_intro` text,
	`who_we_are_title` text DEFAULT 'Who We Are' NOT NULL,
	`who_we_are_content` text NOT NULL,
	`who_we_are_image_id` integer,
	`who_we_are_image_on_left` integer DEFAULT false,
	`what_we_do_title` text DEFAULT 'What We Do' NOT NULL,
	`what_we_do_content` text NOT NULL,
	`what_we_do_image_id` integer,
	`what_we_do_image_on_left` integer DEFAULT true,
	`gallery_title` text DEFAULT 'The Oregon We Love' NOT NULL,
	`updated_at` text,
	`created_at` text,
	FOREIGN KEY (`hero_background_image_id`) REFERENCES `media`(`id`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (`who_we_are_image_id`) REFERENCES `media`(`id`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (`what_we_do_image_id`) REFERENCES `media`(`id`) ON UPDATE no action ON DELETE set null
);
INSERT INTO "homepage" VALUES(1,'The solution to problems in a democracy is more democracy Test','Join thousands of Oregonians working for practical solutions',1,1,'Get Involved','Sign up to receive updates on our initiatives','How We Work','Three principles that guide everything we do','Why Oregon Needs Change','Key Issues Facing Oregon',NULL,'Who We Are','{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","text":"We are Oregon citizens who believe the public good is not being served by our government. We''re both Independents, Democrats and Republicans, and we''re "},{"type":"text","text":"ideologically bound only to finding practical ways","format":1},{"type":"text","text":" to move Oregon forward. We are aware that in today''s hyper-partisan world, it is all too easy to attack the messenger rather than debate the message."}]},{"type":"paragraph","children":[{"type":"text","text":"That''s why we''re committed to "},{"type":"text","text":"stand together","format":1},{"type":"text","text":", and let the ideas we move forward stand on their own. We are together dedicated to finding simple, practical ideas that have strong public support across the political spectrum, but that have no chance of moving through our state government."}]}]}}',NULL,0,'What We Do','{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","text":"Our purpose is to "},{"type":"text","text":"explore and incubate positive, popular solutions","format":1},{"type":"text","text":" to real problems through ballot measure concepts that could be moved to the ballot if given a fair path forward. When we find success forcing the Oregon Secretary of State and Attorney General to create and approve fair ballot measure titles, we will build a campaign to move those initiatives forward and pass them into law."}]},{"type":"paragraph","children":[{"type":"text","text":"We believe in "},{"type":"text","text":"transparency and open dialogue","format":1},{"type":"text","text":". Every step of our process, from concept development to petition approval, is guided by the principle that government should serve the people, not special interests."}]}]}}',NULL,1,'The Oregon We Love','2025-10-04T01:34:31.977Z','2025-10-03T15:38:32.848Z');
CREATE TABLE `site_settings` (
	`id` integer PRIMARY KEY NOT NULL,
	`site_name` text DEFAULT 'Oregon Idea Lab' NOT NULL,
	`site_description` text DEFAULT 'Practical Solutions Through Democracy' NOT NULL,
	`logo_id` integer,
	`contact_email` text,
	`social_links_facebook` text,
	`social_links_twitter` text,
	`social_links_instagram` text,
	`updated_at` text,
	`created_at` text,
	FOREIGN KEY (`logo_id`) REFERENCES `media`(`id`) ON UPDATE no action ON DELETE set null
);
INSERT INTO "site_settings" VALUES(1,'Oregon Idea Lab','Practical Solutions Through Democracy',NULL,'info@oregonidealab.com',NULL,NULL,NULL,'2025-10-03T15:38:32.842Z','2025-10-03T15:38:32.842Z');
ANALYZE sqlite_schema;
INSERT INTO "sqlite_stat1" VALUES('homepage','homepage_what_we_do_what_we_do_image_idx','1 1');
INSERT INTO "sqlite_stat1" VALUES('homepage','homepage_who_we_are_who_we_are_image_idx','1 1');
INSERT INTO "sqlite_stat1" VALUES('homepage','homepage_hero_hero_background_image_idx','1 1');
INSERT INTO "sqlite_stat1" VALUES('homepage_how_we_work_features','homepage_how_we_work_features_illustration_idx','3 3');
INSERT INTO "sqlite_stat1" VALUES('homepage_how_we_work_features','homepage_how_we_work_features_parent_id_idx','3 3');
INSERT INTO "sqlite_stat1" VALUES('homepage_how_we_work_features','homepage_how_we_work_features_order_idx','3 1');
INSERT INTO "sqlite_stat1" VALUES('homepage_how_we_work_features','sqlite_autoindex_homepage_how_we_work_features_1','3 1');
INSERT INTO "sqlite_stat1" VALUES('payload_migrations','payload_migrations_created_at_idx','2 1');
INSERT INTO "sqlite_stat1" VALUES('payload_migrations','payload_migrations_updated_at_idx','2 1');
INSERT INTO "sqlite_stat1" VALUES('payload_preferences','payload_preferences_created_at_idx','6 1');
INSERT INTO "sqlite_stat1" VALUES('payload_preferences','payload_preferences_updated_at_idx','6 1');
INSERT INTO "sqlite_stat1" VALUES('payload_preferences','payload_preferences_key_idx','6 1');
INSERT INTO "sqlite_stat1" VALUES('site_settings','site_settings_logo_idx','1 1');
INSERT INTO "sqlite_stat1" VALUES('payload_locked_documents_rels','payload_locked_documents_rels_media_id_idx','1 1');
INSERT INTO "sqlite_stat1" VALUES('payload_locked_documents_rels','payload_locked_documents_rels_pages_id_idx','1 1');
INSERT INTO "sqlite_stat1" VALUES('payload_locked_documents_rels','payload_locked_documents_rels_navigation_id_idx','1 1');
INSERT INTO "sqlite_stat1" VALUES('payload_locked_documents_rels','payload_locked_documents_rels_categories_id_idx','1 1');
INSERT INTO "sqlite_stat1" VALUES('payload_locked_documents_rels','payload_locked_documents_rels_posts_id_idx','1 1');
INSERT INTO "sqlite_stat1" VALUES('payload_locked_documents_rels','payload_locked_documents_rels_users_id_idx','1 1');
INSERT INTO "sqlite_stat1" VALUES('payload_locked_documents_rels','payload_locked_documents_rels_path_idx','1 1');
INSERT INTO "sqlite_stat1" VALUES('payload_locked_documents_rels','payload_locked_documents_rels_parent_idx','1 1');
INSERT INTO "sqlite_stat1" VALUES('payload_locked_documents_rels','payload_locked_documents_rels_order_idx','1 1');
INSERT INTO "sqlite_stat1" VALUES('payload_locked_documents','payload_locked_documents_created_at_idx','1 1');
INSERT INTO "sqlite_stat1" VALUES('payload_locked_documents','payload_locked_documents_updated_at_idx','1 1');
INSERT INTO "sqlite_stat1" VALUES('payload_locked_documents','payload_locked_documents_global_slug_idx','1 1');
INSERT INTO "sqlite_stat1" VALUES('homepage_key_issues_issues','homepage_key_issues_issues_parent_id_idx','4 4');
INSERT INTO "sqlite_stat1" VALUES('homepage_key_issues_issues','homepage_key_issues_issues_order_idx','4 1');
INSERT INTO "sqlite_stat1" VALUES('homepage_key_issues_issues','sqlite_autoindex_homepage_key_issues_issues_1','4 1');
INSERT INTO "sqlite_stat1" VALUES('media','media_sizes_tablet_sizes_tablet_filename_idx','1 1');
INSERT INTO "sqlite_stat1" VALUES('media','media_sizes_card_sizes_card_filename_idx','1 1');
INSERT INTO "sqlite_stat1" VALUES('media','media_sizes_thumbnail_sizes_thumbnail_filename_idx','1 1');
INSERT INTO "sqlite_stat1" VALUES('media','media_filename_idx','1 1');
INSERT INTO "sqlite_stat1" VALUES('media','media_created_at_idx','1 1');
INSERT INTO "sqlite_stat1" VALUES('media','media_updated_at_idx','1 1');
INSERT INTO "sqlite_stat1" VALUES('_cf_KV','_cf_KV','1 1');
INSERT INTO "sqlite_stat1" VALUES('payload_preferences_rels','payload_preferences_rels_users_id_idx','6 6');
INSERT INTO "sqlite_stat1" VALUES('payload_preferences_rels','payload_preferences_rels_path_idx','6 6');
INSERT INTO "sqlite_stat1" VALUES('payload_preferences_rels','payload_preferences_rels_parent_idx','6 1');
INSERT INTO "sqlite_stat1" VALUES('payload_preferences_rels','payload_preferences_rels_order_idx','6 6');
INSERT INTO "sqlite_stat1" VALUES('users_sessions','users_sessions_parent_id_idx','1 1');
INSERT INTO "sqlite_stat1" VALUES('users_sessions','users_sessions_order_idx','1 1');
INSERT INTO "sqlite_stat1" VALUES('users_sessions','sqlite_autoindex_users_sessions_1','1 1');
INSERT INTO "sqlite_stat1" VALUES('users','users_email_idx','1 1');
INSERT INTO "sqlite_stat1" VALUES('users','users_created_at_idx','1 1');
INSERT INTO "sqlite_stat1" VALUES('users','users_updated_at_idx','1 1');
INSERT INTO "sqlite_stat1" VALUES('posts','posts_created_at_idx','3 1');
INSERT INTO "sqlite_stat1" VALUES('posts','posts_updated_at_idx','3 1');
INSERT INTO "sqlite_stat1" VALUES('posts','posts_featured_image_idx','3 3');
INSERT INTO "sqlite_stat1" VALUES('posts','posts_category_idx','3 1');
INSERT INTO "sqlite_stat1" VALUES('posts','posts_slug_idx','3 1');
INSERT INTO "sqlite_stat1" VALUES('homepage_why_change_points','homepage_why_change_points_parent_id_idx','5 5');
INSERT INTO "sqlite_stat1" VALUES('homepage_why_change_points','homepage_why_change_points_order_idx','5 1');
INSERT INTO "sqlite_stat1" VALUES('homepage_why_change_points','sqlite_autoindex_homepage_why_change_points_1','5 1');
INSERT INTO "sqlite_stat1" VALUES('categories','categories_created_at_idx','4 1');
INSERT INTO "sqlite_stat1" VALUES('categories','categories_updated_at_idx','4 1');
INSERT INTO "sqlite_stat1" VALUES('categories','categories_slug_idx','4 1');
INSERT INTO "sqlite_stat1" VALUES('categories','categories_name_idx','4 1');
INSERT INTO "sqlite_stat1" VALUES('navigation_items','navigation_items_parent_id_idx','5 5');
INSERT INTO "sqlite_stat1" VALUES('navigation_items','navigation_items_order_idx','5 1');
INSERT INTO "sqlite_stat1" VALUES('navigation_items','sqlite_autoindex_navigation_items_1','5 1');
INSERT INTO "sqlite_stat1" VALUES('navigation','navigation_created_at_idx','1 1');
INSERT INTO "sqlite_stat1" VALUES('navigation','navigation_updated_at_idx','1 1');
INSERT INTO "sqlite_stat1" VALUES('pages','pages_created_at_idx','3 1');
INSERT INTO "sqlite_stat1" VALUES('pages','pages_updated_at_idx','3 1');
INSERT INTO "sqlite_stat1" VALUES('pages','pages_slug_idx','3 1');
CREATE INDEX `users_sessions_order_idx` ON `users_sessions` (`_order`);
CREATE INDEX `users_sessions_parent_id_idx` ON `users_sessions` (`_parent_id`);
CREATE INDEX `users_updated_at_idx` ON `users` (`updated_at`);
CREATE INDEX `users_created_at_idx` ON `users` (`created_at`);
CREATE UNIQUE INDEX `users_email_idx` ON `users` (`email`);
CREATE UNIQUE INDEX `posts_slug_idx` ON `posts` (`slug`);
CREATE INDEX `posts_category_idx` ON `posts` (`category_id`);
CREATE INDEX `posts_featured_image_idx` ON `posts` (`featured_image_id`);
CREATE INDEX `posts_updated_at_idx` ON `posts` (`updated_at`);
CREATE INDEX `posts_created_at_idx` ON `posts` (`created_at`);
CREATE UNIQUE INDEX `categories_name_idx` ON `categories` (`name`);
CREATE UNIQUE INDEX `categories_slug_idx` ON `categories` (`slug`);
CREATE INDEX `categories_updated_at_idx` ON `categories` (`updated_at`);
CREATE INDEX `categories_created_at_idx` ON `categories` (`created_at`);
CREATE INDEX `navigation_items_order_idx` ON `navigation_items` (`_order`);
CREATE INDEX `navigation_items_parent_id_idx` ON `navigation_items` (`_parent_id`);
CREATE INDEX `navigation_updated_at_idx` ON `navigation` (`updated_at`);
CREATE INDEX `navigation_created_at_idx` ON `navigation` (`created_at`);
CREATE UNIQUE INDEX `pages_slug_idx` ON `pages` (`slug`);
CREATE INDEX `pages_updated_at_idx` ON `pages` (`updated_at`);
CREATE INDEX `pages_created_at_idx` ON `pages` (`created_at`);
CREATE INDEX `media_updated_at_idx` ON `media` (`updated_at`);
CREATE INDEX `media_created_at_idx` ON `media` (`created_at`);
CREATE UNIQUE INDEX `media_filename_idx` ON `media` (`filename`);
CREATE INDEX `media_sizes_thumbnail_sizes_thumbnail_filename_idx` ON `media` (`sizes_thumbnail_filename`);
CREATE INDEX `media_sizes_card_sizes_card_filename_idx` ON `media` (`sizes_card_filename`);
CREATE INDEX `media_sizes_tablet_sizes_tablet_filename_idx` ON `media` (`sizes_tablet_filename`);
CREATE INDEX `payload_locked_documents_global_slug_idx` ON `payload_locked_documents` (`global_slug`);
CREATE INDEX `payload_locked_documents_updated_at_idx` ON `payload_locked_documents` (`updated_at`);
CREATE INDEX `payload_locked_documents_created_at_idx` ON `payload_locked_documents` (`created_at`);
CREATE INDEX `payload_locked_documents_rels_order_idx` ON `payload_locked_documents_rels` (`order`);
CREATE INDEX `payload_locked_documents_rels_parent_idx` ON `payload_locked_documents_rels` (`parent_id`);
CREATE INDEX `payload_locked_documents_rels_path_idx` ON `payload_locked_documents_rels` (`path`);
CREATE INDEX `payload_locked_documents_rels_users_id_idx` ON `payload_locked_documents_rels` (`users_id`);
CREATE INDEX `payload_locked_documents_rels_posts_id_idx` ON `payload_locked_documents_rels` (`posts_id`);
CREATE INDEX `payload_locked_documents_rels_categories_id_idx` ON `payload_locked_documents_rels` (`categories_id`);
CREATE INDEX `payload_locked_documents_rels_navigation_id_idx` ON `payload_locked_documents_rels` (`navigation_id`);
CREATE INDEX `payload_locked_documents_rels_pages_id_idx` ON `payload_locked_documents_rels` (`pages_id`);
CREATE INDEX `payload_locked_documents_rels_media_id_idx` ON `payload_locked_documents_rels` (`media_id`);
CREATE INDEX `payload_preferences_key_idx` ON `payload_preferences` (`key`);
CREATE INDEX `payload_preferences_updated_at_idx` ON `payload_preferences` (`updated_at`);
CREATE INDEX `payload_preferences_created_at_idx` ON `payload_preferences` (`created_at`);
CREATE INDEX `payload_preferences_rels_order_idx` ON `payload_preferences_rels` (`order`);
CREATE INDEX `payload_preferences_rels_parent_idx` ON `payload_preferences_rels` (`parent_id`);
CREATE INDEX `payload_preferences_rels_path_idx` ON `payload_preferences_rels` (`path`);
CREATE INDEX `payload_preferences_rels_users_id_idx` ON `payload_preferences_rels` (`users_id`);
CREATE INDEX `payload_migrations_updated_at_idx` ON `payload_migrations` (`updated_at`);
CREATE INDEX `payload_migrations_created_at_idx` ON `payload_migrations` (`created_at`);
CREATE INDEX `homepage_how_we_work_features_order_idx` ON `homepage_how_we_work_features` (`_order`);
CREATE INDEX `homepage_how_we_work_features_parent_id_idx` ON `homepage_how_we_work_features` (`_parent_id`);
CREATE INDEX `homepage_how_we_work_features_illustration_idx` ON `homepage_how_we_work_features` (`illustration_id`);
CREATE INDEX `homepage_why_change_points_order_idx` ON `homepage_why_change_points` (`_order`);
CREATE INDEX `homepage_why_change_points_parent_id_idx` ON `homepage_why_change_points` (`_parent_id`);
CREATE INDEX `homepage_key_issues_issues_order_idx` ON `homepage_key_issues_issues` (`_order`);
CREATE INDEX `homepage_key_issues_issues_parent_id_idx` ON `homepage_key_issues_issues` (`_parent_id`);
CREATE INDEX `homepage_gallery_images_order_idx` ON `homepage_gallery_images` (`_order`);
CREATE INDEX `homepage_gallery_images_parent_id_idx` ON `homepage_gallery_images` (`_parent_id`);
CREATE INDEX `homepage_gallery_images_image_idx` ON `homepage_gallery_images` (`image_id`);
CREATE INDEX `homepage_hero_hero_background_image_idx` ON `homepage` (`hero_background_image_id`);
CREATE INDEX `homepage_who_we_are_who_we_are_image_idx` ON `homepage` (`who_we_are_image_id`);
CREATE INDEX `homepage_what_we_do_what_we_do_image_idx` ON `homepage` (`what_we_do_image_id`);
CREATE INDEX `site_settings_logo_idx` ON `site_settings` (`logo_id`);
