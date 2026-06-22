export type Resource = {
  slug: string;
  type: "מאמר" | "פודקאסט" | "וידאו";
  title: string;
  date: string;
  excerpt: string;
  body: string[];
  topics: string[];
  relatedServiceSlugs: string[];
};

export const resources: Resource[] = [
  {
    slug: "singlehood-snapshot",
    type: "מאמר",
    title: "תמונת מצב של הרווקות בימינו",
    date: "2025-08-01",
    excerpt:
      "מבט על המציאות החברתית והרגשית של רווקות מאוחרת, ועל הצורך בשפה חדשה של אחריות ורגישות.",
    body: [
      "הרווקות בדורנו איננה רק נתון אישי. היא תופעה חברתית, קהילתית ורגשית שמבקשת מאיתנו הקשבה עמוקה יותר.",
      "כאשר מדברים על שידוכים, חשוב לא לדבר רק על פתרונות מהירים. צריך להבין את האנשים, את הפחדים, את העייפות, ואת הרצון הגדול לבנות בית מתוך אמת."
    ],
    topics: ["רווקות", "קהילה", "שידוכים"],
    relatedServiceSlugs: ["effective-matchmaking", "community-matchmakers"]
  },
  {
    slug: "talk-to-not-about",
    type: "וידאו",
    title: "לדבר אל - לא רק על",
    date: "2025-07-10",
    excerpt:
      "על המעבר משיח ציבורי על רווקים ורווקות לשיח שמקשיב להם באמת.",
    body: [
      "הרבה פעמים השיח על רווקות נעשה מעל הראש של האנשים עצמם. שינוי אמיתי מתחיל כשמדברים אל האדם, ולא רק על התופעה.",
      "שפה מכבדת יכולה להפוך קהילה ממקום של לחץ למקום של ליווי, תקווה ואחריות."
    ],
    topics: ["קהילה", "שיח", "רגישות"],
    relatedServiceSlugs: ["lectures", "workshops"]
  },
  {
    slug: "podcast-opening",
    type: "פודקאסט",
    title: "פודקאסט כאן בונים - פרק פתיחה",
    date: "2025-06-20",
    excerpt:
      "פתיחה לשיחה רחבה על שידוכים, רווקות, זוגיות ובניית בית בציבור הדתי-לאומי.",
    body: [
      "הפודקאסט נולד מתוך רצון לדבר על שידוכים וזוגיות בשפה קרובה, אחראית ולא שיפוטית.",
      "בפרק הפתיחה נוגעים בשאלות שמלוות רווקים, הורים וקהילות: מה השתנה, מה נשאר, ואיך אפשר לבנות יותר טוב."
    ],
    topics: ["פודקאסט", "שידוכים", "זוגיות"],
    relatedServiceSlugs: ["effective-matchmaking", "coaching"]
  },
  {
    slug: "intimacy-triangle",
    type: "מאמר",
    title: "משולש האינטימיות",
    date: "2025-05-12",
    excerpt:
      "מחשבה על המרכיבים שמאפשרים קשר עמוק: אמון, פתיחות, והתקדמות בקצב נכון.",
    body: [
      "אינטימיות איננה נוצרת ברגע אחד. היא נבנית מתוך אמון, יכולת לדבר באמת, ורגישות לקצב של שני הצדדים.",
      "בפגישות, השאלה איננה רק האם היתה כימיה, אלא האם נוצר מרחב שבו אפשר להכיר ולהיבנות."
    ],
    topics: ["דייטים", "קשר", "תקשורת"],
    relatedServiceSlugs: ["coaching", "workshops"]
  }
];

export function getResource(slug: string) {
  return resources.find((resource) => resource.slug === slug);
}

