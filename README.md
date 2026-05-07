# segment-drift-detector
Real-time dynamic segment tracking system with delta detection, event-driven updates, cascading segment dependencies and batch processing.


# Project Understanding

This project implements a **real-time customer segmentation engine** capable of tracking membership drift, calculating deltas and propagating segment changes across dependent systems.

A **segment** represents a group of customers selected by specific business rules.

---

## Example Segments

| Segment | Description |
|---|---|
| **Active Buyers** | Customers with at least one transaction in the last 30 days |
| **VIP Customers** | Customers whose purchases exceed 5000₾ |
| **Risk Group** | Customers inactive for a long period |

---

# Core Problem

The most important part of the task is **not only determining the current members of a segment**, but also detecting the **exact membership changes** between evaluations.

The system must identify:

- Which customers **entered** the segment
- Which customers **left** the segment

This difference is called a **delta**.

---

# Delta Example

## Previous Snapshot

```text
[A, B]
```

## Current Snapshot

```text
[B, C]
```

## Calculated Delta

```text
Added:   [C]
Removed: [A]
```

---

# Delta Propagation

After calculating a delta, the system propagates the change to interested consumers such as:

- UI realtime updates
- Campaign/background processes
- Dependent segments
- Monitoring/logging systems

---

# Segment Types

## Dynamic Segments

Dynamic segments are automatically recalculated whenever relevant customer data changes.

Examples:
- new transaction
- profile update
- time-based expiration

---

## Static Segments

Static segments represent frozen membership snapshots.

They do **not** react to data changes automatically and can only be refreshed manually.

---

# Initial Development Plan

## Phase 1 — Core Domain Setup

- Create customer and transaction entities
- Create segment entities
- Add support for dynamic and static segment types

---

## Phase 2 — Segment Evaluation

- Implement segment recalculation logic
- Generate membership snapshots
- Calculate delta between old and new snapshots

---

## Phase 3 — Event-Driven Updates

- Integrate RabbitMQ
- Publish segment update events
- Add consumers for:
  - UI updates
  - background/campaign processes
  - dependent segment recalculation

---

## Phase 4 — Realtime Updates

- Add SSE-based live updates
- Display segment delta history
- Realtime monitoring of membership changes

---

## Phase 5 — Scalability Improvements

- Add batching/chunk processing
- Prevent noisy event floods
- Handle large-scale updates safely
- Add debouncing for recalculations

---

# Architectural Goals

- Detect membership drift efficiently
- Propagate changes asynchronously
- Support cascading segment dependencies
- Avoid excessive recalculations
- Keep static segments immutable
- Support realtime monitoring and simulation