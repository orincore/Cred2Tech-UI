'use client';

// "Go Back" for the 404 page: needs the browser history, so it is the one client piece.
export function BackButton() {
  return (
    <button type="button" className="cs-link nf-back" onClick={() => window.history.back()}>
      Go Back
    </button>
  );
}
