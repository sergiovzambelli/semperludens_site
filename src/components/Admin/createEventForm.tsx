"use client";

import { useState } from "react";
import { Event } from "@/utils/interfaces";
import { createEvent } from "@/utils/fetch";

export default function CreateEventForm() {
  const [message, setMessage] = useState<string>("");
  const [event, setEvent] = useState<Event>({
    id: "",
    title: "",
    subtitle: "",
    description: "",
    start_date: "",
    start_time: "",
    location: "",
    games: [],
    isActive: false,
    isPublished: false,
    link_maps: "",
    link_image: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEvent((prevEvent) => ({ ...prevEvent, [name]: value }));
  };

  async function handleCreateEvent() {
    try {
      const newEvent = await createEvent({
        title: event.title,
        subtitle: event.subtitle,
        description: event.description,
        start_date: event.start_date,
        start_time: event.start_time,
        location: event.location,
        isActive: event.isActive,
        isPublished: event.isPublished,
        link_maps: event.link_maps,
        link_image: event.link_image,
        id: "",
        games: [],
      });
      setMessage("Event created successfully");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (error) {
      console.error("Error creating event:", error);
      setMessage("Error creating Event");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md h-full w-full relative">
      <h2 className="text-2xl font-bold mb-4">Create New Event</h2>

      <div className="space-y-4">
        {/* Title */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="title"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={event.title}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Event title"
          />
        </div>

        {/* Subtitle */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="subtitle"
          >
            Subtitle
          </label>
          <input
            type="text"
            id="subtitle"
            name="subtitle"
            value={event.subtitle}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Event subtitle"
          />
        </div>

        {/* Description */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={event.description}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Event description"
            rows={4}
          />
        </div>

        {/* Start Date */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="start_date"
            >
              Start Date
            </label>
            <input
              type="text"
              id="start_date"
              name="start_date"
              value={event.start_date}
              onChange={handleChange}
              placeholder="Start Date"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          {/* Start Time */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="start_time"
            >
              Start Time
            </label>
            <input
              type="text"
              id="start_time"
              name="start_time"
              value={event.start_time}
              onChange={handleChange}
              placeholder="Start Time"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        {/* Location */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="location"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={event.location}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Event location"
          />
        </div>

        {/* Links */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="link_maps"
          >
            Google Maps Link
          </label>
          <input
            type="url"
            id="link_maps"
            name="link_maps"
            value={event.link_maps}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Google Maps link"
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="link_image"
          >
            Image Link
          </label>
          <input
            type="url"
            id="link_image"
            name="link_image"
            value={event.link_image}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Image link"
          />
        </div>

        {/* Status */}
        <div className="flex space-x-4 pb-16">
          <div className="flex items-center">
            <input
              id="isActive"
              name="isActive"
              type="checkbox"
              checked={event.isActive}
              onChange={(e) =>
                setEvent((prevEvent) => ({
                  ...prevEvent,
                  isActive: e.target.checked,
                }))
              }
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label
              htmlFor="isActive"
              className="ml-2 block text-sm text-gray-900"
            >
              Active
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="isPublished"
              name="isPublished"
              type="checkbox"
              checked={event.isPublished}
              onChange={(e) =>
                setEvent((prevEvent) => ({
                  ...prevEvent,
                  isPublished: e.target.checked,
                }))
              }
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label
              htmlFor="isPublished"
              className="ml-2 block text-sm text-gray-900"
            >
              Published
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="absolute right-4 left-4 bottom-4">
          {!message ? (
            <button
              onClick={handleCreateEvent}
              type="button"
              className=" w-full inline-flex justify-center py-2 px-4 border shadow-sm text-sm font-medium rounded-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create Event
            </button>
          ) : (
            <p className="bg-yellow w-full inline-flex justify-center py-2 px-4 border shadow-sm text-sm font-medium rounded-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
