
export async function fetchEvents() {
  try {
    const response = await fetch('/api/events');
    return await response.json();
  } catch (error) {
    console.error("Error while calling the API", error);
    return [];
  }
}

export function fetchActiveEvents() {
  
}

export function fetchEvent(id:string) {
  
}