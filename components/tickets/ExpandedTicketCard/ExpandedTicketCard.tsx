"use client";

import {
  IconCalendarFilled,
  IconClockHour4Filled,
  IconCurrencyEuro,
  IconLocationFilled,
  IconMapPinFilled,
} from "@tabler/icons-react";
import styles from "./ExpandedTicketCard.module.css";
import { Avatar, Group, Image, Stack, Text, Timeline } from "@mantine/core";
type props = {
  ticket: any;
  setActiveCard: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export default function ExpandedTicketCard({ ticket, setActiveCard }: props) {
  return (
    <div
      className={styles.card}
      onClick={() => {
        setActiveCard(ticket.uuid);
      }}
    >
      <Image
        src={ticket.imgSrc}
        alt={ticket.title}
        width={800}
        height={300}
        style={{ objectFit: "cover" }}
      />
      <div className={styles.content}>
        <Group justify="space-between">
          <div className="subheader bold">{ticket.title}</div>
          <div className={styles.price}>
            <IconCurrencyEuro />
            {ticket.price}
          </div>
        </Group>

        <div>
          <div className="subsubheader">Description</div>
          <Text c="white">{ticket.description}</Text>
        </div>

        <Group justify="space-around" mt={20}>
          {/* Event timeline */}
          <Stack justify="flex-start">
            <div className="subsubheader">Event timeline</div>
            <Timeline bulletSize={30} autoContrast>
              <Timeline.Item
                bullet={<IconCalendarFilled color="white" />}
                title="Start datum"
                color="white"
              >
                <Text c="white" size="sm">
                  {ticket.start.toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </Text>
              </Timeline.Item>
              <Timeline.Item title="18:00" color="white">
                <Text c="white" size="sm">
                  Deuren open, start receptie
                </Text>
              </Timeline.Item>
              <Timeline.Item title="19:30" color="white">
                <Text c="white" size="sm">
                  Aanvang show
                </Text>
              </Timeline.Item>
            </Timeline>
          </Stack>
          {/* Event location */}
          <Stack>
            <div className="subsubheader">Event Location</div>
            <Timeline bulletSize={30} autoContrast lineWidth={0}>
              {Object.entries(ticket.place).map(([key, value]) => (
                <Timeline.Item
                  bullet={<IconMapPinFilled color="white" />}
                  key={key}
                  title={key.charAt(0).toUpperCase() + key.slice(1)}
                  color="white"
                >
                  <Text c="white" size="sm">
                    {value as string}
                  </Text>
                </Timeline.Item>
              ))}
            </Timeline>
          </Stack>
        </Group>

        <Group justify="center" mt={20}>
          <button className="btn-red">
            <a target="_blank" href={ticket.external_link}>
              Buy tickets here
            </a>
          </button>
        </Group>

        {/* <Group justify="space-between" wrap="wrap">
          <Group className={styles.info}>
            <IconCalendarFilled
              width={36}
              height={36}
              stroke={2}
              className={styles.icon}
            />
            <div className="date">
              {ticket.start.toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </div>
          </Group>

          <Group className={styles.info}>
            <IconClockHour4Filled
              width={36}
              height={36}
              stroke={2}
              className={styles.icon}
            />
            <div className="date">
              {ticket.start.toLocaleTimeString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false, // Use 24-hour format
              })}
            </div>
          </Group>

          <Group className={styles.info}>
            <IconMapPinFilled
              width={36}
              height={36}
              stroke={2}
              className={styles.icon}
            />
            <div className="date">{ticket.place.location}</div>
          </Group>
        </Group> */}
      </div>
    </div>
  );
}
