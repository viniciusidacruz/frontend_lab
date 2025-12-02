"use client";

import { useEffect, useRef } from "react";
import { capturePostHogEvent } from "@/shared/config";
import { SHARED_EVENTS } from "@/shared/constants";
import type { ContentTopic } from "@/shared/queries";
import { ContentCard } from "./ContentCard";

interface ContentCardWrapperProps {
  readonly topic: ContentTopic;
}

export function ContentCardWrapper({ topic }: ContentCardWrapperProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const hasTracked = useRef(false);

  useEffect(() => {
    if (hasTracked.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTracked.current) {
            hasTracked.current = true;
            capturePostHogEvent(SHARED_EVENTS.CONTENT_CARD_VIEWED, {
              topic_id: topic.id,
              topic_title: topic.title,
              topic_variant: topic.variantsTopic,
              topic_status: topic.statusTopic,
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [topic]);

  return (
    <div ref={cardRef}>
      <ContentCard.Root topic={topic}>
        <ContentCard.Tags tags={topic.tags} variant={topic.variantsTopic} />
      </ContentCard.Root>
    </div>
  );
}
