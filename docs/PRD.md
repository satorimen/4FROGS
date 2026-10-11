Ниже — версия документа, которую уже можно передавать product designer, frontend/backend-разработчикам и использовать как основу для оценки сроков и стоимости.

# PRD / BRD / Functional Specification
## Mystery Food Delivery PWA

**Версия:** 1.0  
**Статус:** Draft for development  
**Платформа:** PWA, mobile-first  
**Языки:** English / Hebrew / Russian  
**Рынок MVP:** Israel  
**Валюта:** ILS / ₪

---

# 1. Executive Summary

Продукт решает одну конкретную проблему:

> Пользователь хочет поесть, но не хочет выбирать ресторан и конкретное блюдо.

Вместо каталога ресторанов и меню пользователь проходит короткий сценарий:

**Тип еды → ограничения → бюджет → адрес → оплата.**

Далее система самостоятельно выбирает подходящий ресторан из партнерской сети.

Ресторан получает параметры заказа, но сам определяет конкретное содержимое.

Пользователь до доставки не знает:

- какой ресторан выбран;
- какое блюдо приготовлено;
- что конкретно находится внутри заказа.

Основное ценностное предложение:

> **Не выбирай. Просто скажи, чего тебе хочется, — остальное решим мы.**

---

# 2. Product Vision

Создать максимально простой сервис доставки еды, в котором процесс принятия решения практически устранен.

Обычный food delivery:

**100 ресторанов → 1000 блюд → фильтры → отзывы → сравнение → корзина.**

Наш продукт:

**Savory → ₪99 → Pay.**

В долгосрочной перспективе продукт должен стать системой персонализированного discovery:

> Пользователь получает ощущение случайности, но backend со временем все лучше понимает, что ему понравится.

---

# 3. Business Requirements Document — BRD

## 3.1 Business Objective

Создать marketplace между ресторанами и пользователями, где:

**пользователь покупает не конкретное блюдо, а food experience заданного типа и бюджета.**

Бизнес должен зарабатывать на комиссии / марже с каждого заказа.

---

# 3.2 Business Goals

### Primary goals

1. Максимально сократить время между открытием приложения и оплатой.
2. Добиться высокой частоты повторных заказов.
3. Создать новый формат food discovery.
4. Давать ресторанам дополнительный канал заказов без необходимости публиковать полноценное меню.
5. Обеспечить положительную unit economics заказа.

### Secondary goals

- повышение retention;
- вирусность продукта за счет mystery-концепции;
- формирование собственного бренда;
- накопление preference-data;
- развитие personalized food matching.

---

# 3.3 Business KPIs

Для MVP необходимо отслеживать:

| KPI | Что измеряем |
|---|---|
| Order Conversion | Start → Paid order |
| Checkout Conversion | Checkout → Payment success |
| Time to Order | Время от открытия до оплаты |
| Repeat Purchase Rate | Повторные заказы |
| D7 Retention | Возврат в течение 7 дней |
| D30 Retention | Возврат в течение 30 дней |
| AOV | Средний чек |
| Gross Margin | Маржа на заказ |
| Restaurant Acceptance Rate | Принятые рестораном заказы |
| Cancellation Rate | Отмены |
| Refund Rate | Возвраты |
| Delivery SLA | Время доставки |
| Surprise Rating | Оценка полученной еды |
| Restaurant Rating | Внутренняя оценка ресторана |

---

# 3.4 Revenue Model

Базовая модель:

**Customer payment  
− Restaurant payout  
− Delivery cost  
− Payment fee  
− Refund/support reserve  
= Contribution margin**

Потенциальные источники дохода:

- комиссия ресторана;
- markup внутри фиксированной стоимости;
- service fee;
- delivery fee;
- premium tier;
- подписка — позднее.

---

# 3.5 Pricing

MVP:

- **₪79**
- **₪99**
- **₪149**

Каждый tier является не конкретным товаром, а уровнем food experience.

Необходимо определить минимальное обязательство ресторана.

Например:

### ₪79
Standard Surprise

- полноценный прием пищи для одного человека;
- минимальный внутренний food-value.

### ₪99
Better Surprise

- более высокий food-value;
- основной item + дополнение либо premium item.

### ₪149
Premium Surprise

- premium meal;
- либо несколько компонентов;
- либо увеличенный объем;
- возможен sharing format.

Точные обязательства ресторана должны быть зафиксированы отдельно в partner agreement.

---

# 3.6 Marketplace participants

Три основные роли:

### Customer
Заказывает mystery food.

### Restaurant
Получает заказ и самостоятельно формирует его содержимое.

### Admin / Operations
Контролирует marketplace и решает операционные вопросы.

Опционально:

### Courier
Если доставка управляется собственной системой.

---

# 4. Product Requirements Document — PRD

# 4.1 Product Principles

Все продуктовые решения должны проверяться против следующих принципов.

### 1. Minimum Decisions

Не заставлять пользователя принимать решение, если оно не является критическим.

### 2. Minimum Steps

Удалять промежуточные экраны и действия.

### 3. Surprise First

Не раскрывать контент заказа раньше времени.

### 4. Safety Before Surprise

Аллергии и dietary restrictions имеют приоритет над случайностью.

### 5. Mobile First

Основной сценарий проектируется для смартфона.

### 6. One-handed UX

Ключевые действия должны быть доступны большим пальцем.

### 7. Brand Personality

Интерфейс не должен выглядеть как generic SaaS или очередной food marketplace.

---

# 5. MVP Product Scope

## В MVP входит

- PWA;
- iOS/Android/browser;
- onboarding;
- guest browsing;
- три языка;
- RTL;
- savory/sweet;
- dietary preferences;
- allergies;
- ₪79/₪99/₪149;
- адрес;
- геолокация;
- address autocomplete;
- аккаунт;
- OTP;
- Apple Sign-In;
- Google Sign-In;
- Apple Pay;
- Google Pay;
- банковская карта;
- restaurant matching;
- order lifecycle;
- order tracking;
- ETA;
- push;
- profile;
- order history;
- ratings;
- restaurant portal;
- admin portal.

---

# 6. Out of Scope — MVP

На первой версии не обязательны:

- полноценный social feed;
- публичные рейтинги ресторанов;
- каталог ресторанов;
- классическое меню;
- favorites ресторанов;
- поиск конкретного блюда;
- корзина с несколькими блюдами;
- advanced AI recommendations;
- group ordering;
- подписка;
- gamification;
- сложная loyalty program;
- live courier map, если provider не предоставляет ее просто.

---

# 7. Customer Journey

Основной путь нового пользователя:

```text
OPEN APP
    ↓
LANGUAGE
    ↓
SAVORY / SWEET
    ↓
DIETARY & ALLERGIES
    ↓
₪79 / ₪99 / ₪149
    ↓
ADDRESS
    ↓
SIGN IN
    ↓
PAY
    ↓
MATCHING
    ↓
RESTAURANT ACCEPTS
    ↓
PREPARING
    ↓
COURIER PICKUP
    ↓
DELIVERY
    ↓
REVEAL
    ↓
RATE
```

Для returning user:

```text
OPEN APP
    ↓
SAVORY / SWEET
    ↓
PRICE
    ↓
PAY
```

Сохраненные ограничения и адрес подставляются автоматически.

---

# 8. Information Architecture / Sitemap

```text
/
├── Home
│   ├── Start Order
│   ├── Language
│   └── Profile
│
├── Order Flow
│   ├── Food Type
│   │   ├── Savory
│   │   └── Sweet
│   │
│   ├── Preferences
│   │   ├── Dietary
│   │   └── Allergies
│   │
│   ├── Price
│   │   ├── ₪79
│   │   ├── ₪99
│   │   └── ₪149
│   │
│   ├── Address
│   ├── Authentication
│   ├── Checkout
│   ├── Payment
│   └── Confirmation
│
├── Active Order
│   ├── Matching
│   ├── Accepted
│   ├── Preparing
│   ├── Ready
│   ├── Courier Pickup
│   ├── On The Way
│   └── Delivered
│
├── Reveal
│   ├── Restaurant
│   ├── Meal
│   └── Rating
│
├── Profile
│   ├── Personal Details
│   ├── Preferences
│   ├── Allergies
│   ├── Addresses
│   ├── Payment Methods
│   ├── Order History
│   ├── Language
│   └── Logout
│
├── Support
│   ├── FAQ
│   ├── Active Order Help
│   └── Contact Support
│
└── Legal
    ├── Terms
    ├── Privacy
    └── Allergy Disclaimer
```

---

# 9. Структура экранов

## Screen 01 — Splash

### Назначение
Быстро загрузить PWA.

### UI

- однотонный фирменный фон;
- mascot;
- logo;
- минимальная animation.

### Требования

Не использовать длинную заставку.

Target:

**<1 секунда визуально воспринимаемой задержки** при нормальном соединении.

---

# 10. Screen 02 — Language

Показывается при первом запуске.

Варианты:

**English**

**עברית**

**Русский**

После выбора язык сохраняется.

Иврит автоматически включает RTL layout.

---

# 11. Screen 03 — Home

Главный экран должен быть предельно простым.

Например:

> Hungry?

Mascot.

**SURPRISE ME**

Вторичная информация:

- текущий адрес;
- профиль;
- язык.

Не должно быть:

- ресторанов;
- меню;
- категорий;
- баннеров;
- длинных промо-блоков.

---

# 12. Screen 04 — Food Mood

Основной вопрос:

> What are you in the mood for?

Два крупных блока:

### SAVORY

### SWEET

Вся карточка кликабельна.

После выбора автоматический переход на следующий экран.

Не обязательно показывать кнопку Continue.

---

# 13. Screen 05 — Food Restrictions

Раздел состоит из двух зон.

## Dietary preferences

Пример:

- Vegan
- Vegetarian
- Gluten-free
- Dairy-free

## Allergies

- Peanuts
- Tree nuts
- Sesame
- Milk
- Eggs
- Fish
- Shellfish
- Gluten / wheat

CTA:

**Continue**

Returning users:

предпочтения уже выбраны.

---

# 14. Критически важная модель аллергий

Необходимо различать:

### Preference

> «Я предпочитаю без глютена».

и

### Allergy

> «Контакт с продуктом представляет риск».

С точки зрения backend это разные поля.

Пример:

```text
gluten_preference = true
wheat_allergy = false
```

При наличии allergy matching engine должен исключить любой ресторан, который не подтверждает соответствующую capability.

---

# 15. Screen 06 — Price Tier

Вопрос:

> How hungry are you?

Карточки:

### ₪79
Good

### ₪99
Better

### ₪149
Go big

Можно использовать playful copy.

Однако пользователь должен понимать, что более высокий tier означает большую ценность, а не просто повышение цены.

После выбора:

automatic next step.

---

# 16. Screen 07 — Address

При первом заказе:

> Where should we send it?

Основная CTA:

**Use my location**

Secondary:

**Enter address**

---

## Address autocomplete

Поле:

> Start typing your address

Система показывает варианты.

После выбора:

- city;
- street;
- number.

Дополнительные поля:

- apartment;
- floor;
- entrance;
- door code;
- delivery notes.

---

# 17. Address validation

Backend должен проверить:

```text
Address
↓
Coordinates
↓
Delivery zone
↓
Restaurant availability
↓
Can order?
```

Если адрес вне зоны:

> We’re not delivering here yet.

Предусмотреть:

**Notify me when available.**

---

# 18. Screen 08 — Authentication

Регистрация не должна открываться в начале приложения.

Запрашивать ее ближе к checkout.

Основной метод:

### Phone

Пользователь вводит телефон.

Получает OTP.

Вводит код.

---

## Alternative

- Continue with Apple
- Continue with Google

Email/password для MVP не обязателен.

---

# 19. Authentication requirements

### User Story

**As a user, I want to sign in quickly so that registration does not interrupt my order.**

### Acceptance Criteria

**Given** пользователь находится в checkout  
**When** вводит корректный номер телефона  
**Then** система отправляет OTP.

**Given** OTP корректен  
**When** пользователь вводит код  
**Then** аккаунт создается или пользователь авторизуется.

**Given** OTP некорректен  
**Then** показывается error state.

---

# 20. Screen 09 — Checkout

Максимально простой экран.

Показывать:

**Savory**

**₪99**

**Delivery to**
Haifa...

**Dietary**
No peanuts

**Total**
₪99

CTA:

**Pay ₪99**

Не показывать:

- ресторан;
- конкретное блюдо.

---

# 21. Screen 10 — Payment

Поддержать:

- Apple Pay;
- Google Pay;
- card.

Рекомендуемый UX:

на совместимом iPhone основная кнопка:

**Apple Pay**

На Android:

**Google Pay**

Card — secondary method.

---

# 22. Payment lifecycle

Рекомендуемая схема:

```text
Customer initiates payment
↓
Payment authorization
↓
Restaurant matching
↓
Restaurant accepts
↓
Payment capture
```

Если matching невозможен:

```text
Authorization
↓
No restaurant
↓
Void authorization
```

Это снижает необходимость делать refund после неудачного matching.

Точный flow зависит от выбранного payment provider.

---

# 23. Screen 11 — Matching

После оплаты:

Mascot + animation.

Например:

> Finding your surprise...

Пользователь не видит ресторан.

Backend запускает matching.

---

# 24. Restaurant Matching Engine

Сначала формируется candidate set.

```text
ACTIVE restaurants
AND
OPEN now
AND
inside delivery radius
AND
supports food type
AND
supports price tier
AND
supports dietary requirements
AND
supports allergies
AND
capacity available
```

Далее рассчитывается scoring.

Пример:

```text
Score =
Availability
+ Delivery SLA
+ Restaurant quality
+ User compatibility
+ Marketplace balancing
+ Repeat avoidance
+ Commercial priority
```

Затем выбирается ресторан.

Не рекомендуется использовать настоящий random().

---

# 25. Restaurant Assignment

Вариант MVP:

```text
Restaurant A
↓
20–30 sec response window
↓
Rejected / Timeout
↓
Restaurant B
↓
Restaurant C
```

Задать maximum matching time.

Например:

**120 секунд.**

После превышения:

order failed / retry / payment release.

---

# 26. Screen 12 — Order Tracking

Основной экран после оформления.

Не перегружать карту.

Визуальный status progression:

```text
✓ Order confirmed
● Cooking
○ Courier pickup
○ On the way
○ Delivered
```

Показывать ETA.

Например:

> About 28 min

---

# 27. Order Status Model

Backend statuses:

```text
CREATED
PAYMENT_AUTHORIZED

MATCHING
RESTAURANT_ASSIGNED

RESTAURANT_ACCEPTED

PREPARING
READY_FOR_PICKUP

COURIER_ASSIGNED
COURIER_PICKED_UP

ON_THE_WAY

DELIVERED

CANCELLED
REFUNDED
FAILED
```

Frontend может объединять их в более простые статусы.

---

# 28. Reveal Logic

До статуса DELIVERED:

не показываем:

- restaurant_name;
- meal_name;
- meal_photo;
- exact contents.

После DELIVERED:

показываем reveal screen.

---

# 29. Screen 13 — Reveal

Например:

> Surprise!

Tonight you got:

**Korean chicken bowl**

from

**Restaurant Name**

Можно добавить:

- фотографию;
- состав;
- ресторан;
- информацию о блюде.

CTA:

**How was it?**

---

# 30. Screen 14 — Rating

Максимально коротко.

Например:

> Did we nail it?

😕 😐 🙂 😍

или:

1–5.

Дополнительно:

- Too small
- Great portion
- Didn’t like the taste
- Loved it
- Wrong dietary requirement
- Other

CTA:

**Done**

---

# 31. Feedback Data

Важно хранить отдельно:

### Restaurant quality

и

### Personal preference.

Если пользователь говорит:

> «Не люблю curry»

это не означает, что ресторан плохой.

Это preference signal.

Если:

> «Еда приехала холодной»

это quality / delivery issue.

---

# 32. Profile

Профиль не должен быть ключевой частью UX.

Sections:

### My preferences

### Allergies

### Addresses

### Payment

### Orders

### Language

### Support

### Legal

---

# 33. User Stories — Customer

## US-001 — Start Order

**As a user  
I want to start ordering immediately  
So that I don't have to navigate menus.**

### Acceptance Criteria

- Home содержит один primary CTA.
- CTA доступен без авторизации.
- Нажатие открывает Food Type.
- Order flow загружается <1 sec после загрузки приложения.

---

# 34. US-002 — Select Food Type

**As a user  
I want to choose savory or sweet  
So that the system understands what type of food I want.**

### Acceptance Criteria

- Доступно ровно два primary options.
- Пользователь может выбрать только один.
- Выбор сохраняется в current order.
- После выбора пользователь автоматически переходит дальше.

---

# 35. US-003 — Dietary Requirements

**As a user  
I want to specify my dietary requirements  
So that I don't receive unsuitable food.**

### Acceptance Criteria

- Можно выбрать несколько параметров.
- Можно выбрать zero parameters.
- Selection сохраняется.
- Returning user видит сохраненные preferences.
- Пользователь может изменить их.

---

# 36. US-004 — Allergies

**As a user  
I want to report allergies  
So that dangerous restaurants are excluded.**

### Acceptance Criteria

- Allergy отличается от preference.
- Можно выбрать несколько allergies.
- Restaurant matching учитывает каждый allergen.
- Ресторан без нужной certification/capability исключается.
- Пользователю показывается соответствующий safety notice.

---

# 37. US-005 — Select Budget

**As a user  
I want to choose my budget  
So that I control how much I spend without choosing food.**

### Acceptance Criteria

Показываются только:

- ₪79
- ₪99
- ₪149

Выбирается только один tier.

Price передается в backend.

---

# 38. US-006 — Use Location

**As a user  
I want the app to identify my address  
So that I don't need to type it manually.**

### Acceptance Criteria

**Given** пользователь разрешает geolocation  
**Then** приложение получает coordinates.

**Then** выполняется reverse geocoding.

**Then** пользователь подтверждает найденный адрес.

Нельзя автоматически оформлять заказ по GPS без подтверждения адреса.

---

# 39. US-007 — Manual Address

**As a user  
I want autocomplete  
So that I can enter an address quickly.**

### Acceptance Criteria

- Results появляются по мере ввода.
- Показываются релевантные адреса.
- После выбора хранится formatted address + lat/lng.
- Выполняется delivery eligibility validation.

---

# 40. US-008 — Checkout

**As a user  
I want to review my choices before paying.**

### Acceptance Criteria

Показываются:

- type;
- price;
- restrictions;
- address;
- total.

Не показываются restaurant и meal.

---

# 41. US-009 — Payment

**As a user  
I want to pay using my preferred wallet  
So that checkout takes seconds.**

### Acceptance Criteria

Поддержать:

- Apple Pay;
- Google Pay;
- card.

После успешной authorization:

order создается.

При failed payment:

order не направляется ресторану.

---

# 42. US-010 — Track Order

**As a user  
I want to know what is happening with my order  
Without revealing the surprise.**

### Acceptance Criteria

Пользователь видит:

- current status;
- ETA;
- progression.

Не видит:

- restaurant;
- meal.

---

# 43. US-011 — Receive Push

**As a user  
I want notifications about important order events.**

Push:

- accepted;
- preparing;
- courier on the way;
- courier arriving;
- delivered.

---

# 44. US-012 — Reveal Order

**As a user  
I want to discover what I received once it arrives.**

### Acceptance Criteria

Reveal становится доступен только после DELIVERED.

Показывает:

- ресторан;
- блюдо;
- описание, если предоставлено.

---

# 45. US-013 — Rate Surprise

**As a user  
I want to rate my experience  
So that future surprises become better.**

### Acceptance Criteria

- Rating ≤ 1 action для базовой оценки.
- Optional reasons.
- Rating сохраняется.
- Сигнал доступен recommendation engine.

---

# 46. User Stories — Restaurant

## RS-001 — Receive Mystery Order

Ресторан видит:

```text
Mystery Order #1242

Tier: ₪99
Type: Savory

Requirements:
✓ Vegan
✓ No peanuts

Accept
Decline
```

Ресторан **не должен** решать, можно ли проигнорировать allergy.

---

# 47. RS-002 — Accept Order

### Acceptance Criteria

- ресторан должен ответить в установленное время;
- acceptance фиксируется;
- пользователь получает новый статус;
- начинается preparation SLA.

---

# 48. RS-003 — Prepare Order

Ресторан самостоятельно выбирает meal.

При этом обязан соблюдать:

- pricing tier rules;
- dietary requirements;
- allergies;
- packaging requirements.

---

# 49. RS-004 — Mark Ready

Restaurant:

**READY FOR PICKUP**

После этого:

- courier provider получает событие;
- customer tracking обновляется.

---

# 50. Restaurant Configuration

Restaurant portal:

```text
Restaurant
├── Status
├── Working Hours
├── Capacity
├── Categories
│   ├── Savory
│   └── Sweet
├── Price Tiers
│   ├── 79
│   ├── 99
│   └── 149
├── Dietary Capabilities
├── Allergy Capabilities
├── Delivery Area
├── Orders
└── Performance
```

---

# 51. Restaurant Safety Matrix

Пример:

| Requirement | Supported |
|---|---:|
| Vegan | ✓ |
| Vegetarian | ✓ |
| Gluten-free preference | ✓ |
| Celiac-safe | ✕ |
| Peanut allergy | ✓ |
| Tree nut allergy | ✕ |
| Sesame allergy | ✕ |

Это должно быть machine-readable.

---

# 52. Admin Requirements

Admin dashboard должен включать:

### Orders

- live orders;
- failed;
- cancelled;
- delayed;
- completed.

### Restaurants

- activation;
- suspension;
- capabilities;
- opening hours;
- performance.

### Users

- basic details;
- history;
- refunds;
- support.

### Marketplace

- matching;
- delivery zones;
- capacity;
- pricing.

### Finance

- restaurant payout;
- payment;
- refund;
- platform revenue.

---

# 53. Operations Dashboard

Особенно полезен real-time экран:

```text
ACTIVE ORDERS

#1021  Preparing      18 min
#1022  Matching       01:24
#1023  Courier        31 min
#1024  DELAYED        57 min
```

Delayed orders должны визуально выделяться.

---

# 54. Business Rules

## BR-001
Заказ не может попасть ресторану, не поддерживающему соответствующие ограничения.

## BR-002
Price tier определяется пользователем и не может изменяться рестораном.

## BR-003
Ресторан не может добавлять пользователю дополнительные платежи.

## BR-004
Пользователь не видит ресторан до reveal.

## BR-005
Restaurant matching происходит автоматически.

## BR-006
Система должна избегать слишком частого назначения одного ресторана одному пользователю.

## BR-007
Unavailable restaurants исключаются из matching.

## BR-008
Timeout acceptance приводит к reassignment.

## BR-009
После DELIVERED restaurant reveal становится доступен.

## BR-010
При невозможности найти ресторан payment authorization должна быть отменена.

---

# 55. Repeat Avoidance

Чтобы mystery действительно работал:

хранить историю:

```text
user_id
restaurant_id
food_category
date
```

Можно использовать правило MVP:

не давать тот же ресторан пользователю в течение последних **N заказов**, если есть достаточное число альтернатив.

Например:

N = 3.

---

# 56. Personalization — Future Architecture

Даже если ML пока не будет использоваться, модель данных должна собирать:

- food rating;
- restaurant rating;
- portion rating;
- cuisine;
- spicy preference;
- dislike signals;
- reorder behavior.

В будущем:

```text
Mystery
≠
Random
```

а:

```text
Mystery =
Unknown to user
+
High predicted relevance
```

---

# 57. Localization

Все строки должны храниться через translation keys.

Например:

```text
order.start

en:
Surprise me

ru:
Удиви меня

he:
הפתיעו אותי
```

Не вставлять UI-тексты напрямую в frontend components.

---

# 58. RTL Requirements

При Hebrew:

```css
direction: rtl;
```

Но недостаточно просто поменять direction.

Необходимо адаптировать:

- arrows;
- back buttons;
- progress indicators;
- icons;
- margin/padding logic;
- text alignment;
- transition directions.

Использовать logical CSS properties:

```text
margin-inline-start
padding-inline-end
```

а не left/right, где возможно.

---

# 59. Brand / Visual Direction

Присланный референс задает хорошее направление:

**простая крупная иллюстрация + мощный однотонный background + легкая абсурдность персонажа.**

Не копировать конкретного персонажа.

Нужно создать **собственного mascot**.

Характер:

- слегка ленивый;
- задумчивый;
- голодный;
- немного безразличный;
- relatable;
- немного meme-able.

Его роль:

> визуально представлять проблему «я не знаю, что хочу есть».

---

# 60. UI Design System

Рекомендуется создать небольшой system:

### Background

1 основной фирменный фон.

### Surface

Белый / нейтральный.

### Typography

1 font family.

### Border radius

1–2 значения.

### Buttons

- Primary
- Secondary
- Ghost

### Cards

- Food type
- Price
- preference

### Feedback

- success
- warning
- error

Не создавать 20 типов компонентов.

---

# 61. Animation Principles

Анимации нужны для эмоциональности, но не должны замедлять flow.

Можно анимировать:

- mascot;
- выбор category;
- matching;
- cooking;
- courier;
- reveal.

Не анимировать checkout таким образом, чтобы пользователь ждал.

---

# 62. PWA Requirements

Приложение должно иметь:

- web manifest;
- service worker;
- installability;
- application icons;
- splash behavior;
- standalone mode;
- offline fallback;
- asset caching.

---

# 63. Offline behavior

Без интернета нельзя оформлять новый заказ.

Но приложение должно:

- открываться;
- показывать offline state;
- сохранять local shell.

Message:

> You’re offline. Connect to order your surprise.

---

# 64. Performance Requirements

Цели:

### Lighthouse

Performance ≥ 90 — ориентир.

### LCP
<2.5 sec.

### CLS
<0.1.

### Input response
ощущаться мгновенным.

Основной order flow должен быть максимально легким.

---

# 65. Accessibility

Минимально:

WCAG AA для основных элементов.

Обязательные требования:

- contrast;
- touch targets;
- keyboard navigation;
- focus states;
- screen reader labels;
- semantic HTML.

---

# 66. Suggested Technical Architecture

## Frontend

**Next.js + React + TypeScript**

Дополнительно:

- PWA/service worker;
- i18n;
- RTL;
- TanStack Query / аналог;
- lightweight state management.

---

# 67. Backend

Один из вариантов:

**NestJS + TypeScript**

или:

**FastAPI / Django**

Для такого marketplace я бы рассматривал:

**NestJS + PostgreSQL + Redis.**

---

# 68. Core infrastructure

```text
Frontend
    ↓
API Gateway / Backend
    ↓
├── Auth
├── Orders
├── Matching
├── Restaurants
├── Payments
├── Delivery
├── Notifications
└── Admin

PostgreSQL
Redis
Queue
Object Storage
Analytics
Monitoring
```

---

# 69. Queue System

Асинхронные операции лучше вести через queue:

- restaurant matching;
- timeout;
- notifications;
- payment handling;
- webhook processing;
- delivery events.

Возможный stack:

**BullMQ + Redis**

или equivalent.

---

# 70. Real-time updates

Для order tracking:

предпочтительно:

**SSE**

или WebSocket.

Для такого сценария SSE часто будет достаточно, поскольку клиент в основном получает server → client updates.

Fallback:

polling.

---

# 71. Backend Entities

Основные таблицы:

```text
users
addresses
user_preferences
user_allergies

restaurants
restaurant_hours
restaurant_capabilities
restaurant_price_tiers

orders
order_preferences
order_allergies
order_status_history

payments
refunds

deliveries

ratings

notifications

support_cases
```

---

# 72. Order Entity

Пример:

```text
id
user_id

type
price_tier

address_id

restaurant_id

status

payment_status

delivery_status

subtotal
delivery_fee
service_fee
total

created_at
accepted_at
ready_at
picked_up_at
delivered_at
```

---

# 73. API Outline

## Auth

```text
POST /auth/otp/request
POST /auth/otp/verify
POST /auth/apple
POST /auth/google
```

## Orders

```text
POST /orders
GET /orders/:id
GET /orders
POST /orders/:id/cancel
```

## Addresses

```text
GET /addresses
POST /addresses
PATCH /addresses/:id
DELETE /addresses/:id
```

## Profile

```text
GET /me
PATCH /me
GET /me/preferences
PUT /me/preferences
```

---

# 74. Restaurant APIs

```text
GET /restaurant/orders
POST /restaurant/orders/:id/accept
POST /restaurant/orders/:id/reject
POST /restaurant/orders/:id/preparing
POST /restaurant/orders/:id/ready
```

---

# 75. Webhook integrations

Backend должен принимать webhooks от:

### Payment

```text
payment_authorized
payment_captured
payment_failed
payment_refunded
```

### Delivery

```text
courier_assigned
picked_up
on_the_way
delivered
cancelled
```

---

# 76. Notifications

Push template examples:

### Order accepted

> Something good is happening.

### Preparing

> Your surprise is cooking.

### Courier

> Your mystery is on the way.

### Almost there

> Don't peek.

### Delivered

> Time to find out.

Это хороший пример tone of voice: короткий и характерный.

---

# 77. Analytics Event Taxonomy

Минимальные события:

```text
app_open

order_started

food_type_selected

preferences_opened
preference_selected

allergy_selected

price_selected

location_requested
location_granted
location_denied

address_entered

auth_started
auth_completed

checkout_viewed

payment_started
payment_success
payment_failed

matching_started
restaurant_assigned

restaurant_accepted

order_preparing

courier_assigned
order_picked_up

order_delivered

reveal_opened

rating_submitted
```

---

# 78. Funnel

Главный funnel:

```text
App Open
↓
Start
↓
Food Type
↓
Price
↓
Address
↓
Checkout
↓
Payment
↓
Delivered
↓
Rated
↓
Second Order
```

Особое внимание:

**Payment → Second Order**

Именно это покажет жизнеспособность концепции.

---

# 79. Error States

Нужно заранее задизайнить минимум:

### No restaurants

> No surprises available right now.

### Payment failure

> Payment didn't go through.

### Delivery unavailable

> We don't deliver here yet.

### Restaurant cancelled

> That surprise didn't work out. Finding another one.

### GPS denied

> Enter your address instead.

### Network failure

> Connection lost.

---

# 80. Critical Edge Case — Restaurant cancels after payment

Flow:

```text
Restaurant A accepts
↓
Payment capture
↓
Restaurant cancels
```

Система должна:

1. попытаться переназначить заказ;
2. сохранить тот же tier;
3. не брать вторую оплату;
4. уведомить пользователя только если задержка значительна;
5. при невозможности выполнить заказ — refund.

---

# 81. Cancellation Policy

Нужно зафиксировать business rule.

Предлагаемый вариант:

до RESTAURANT_ACCEPTED:

**free cancellation**

после начала приготовления:

возможен отказ от refund либо partial refund согласно правилам сервиса и применимому законодательству.

Финальные правила должны пройти юридическую проверку.

---

# 82. Allergy Incident Flow

Отдельная critical flow.

Если пользователь сообщает:

> Meal contained allergen

это не обычная жалоба.

Создается incident:

```text
HIGH PRIORITY
```

Система:

- фиксирует restaurant;
- сохраняет order;
- сообщает operations;
- может временно отключать соответствующую allergy capability ресторана до проверки.

---

# 83. Support Priority Levels

### P0

- allergy/safety;
- charge without order.

### P1

- order not delivered;
- courier issue;
- wrong restriction.

### P2

- quality;
- cold food;
- portion.

### P3

- account/settings.

---

# 84. Security

Требования:

- HTTPS;
- JWT / secure sessions;
- refresh token rotation;
- rate limiting;
- OTP abuse protection;
- webhook signature verification;
- encryption in transit;
- secrets management;
- admin RBAC;
- audit logs.

---

# 85. Payment Security

Приложение не должно самостоятельно хранить card details.

Card data идет через PCI-compliant payment provider.

Backend хранит только:

- provider customer ID;
- token;
- payment reference;
- last4 при необходимости.

---

# 86. Privacy

Необходимо поддержать:

- privacy policy;
- consent management;
- deletion request;
- data export, если требуется;
- marketing consent отдельно.

Геолокацию использовать только по необходимости.

---

# 87. Acceptance Criteria — MVP

MVP можно считать готовым к production beta, если выполняются следующие условия:

1. Новый пользователь может заказать еду без предварительной регистрации.
2. Заказ оформляется через mobile browser.
3. PWA устанавливается на home screen.
4. Работают English / Hebrew / Russian.
5. Hebrew полностью RTL.
6. Работают savory / sweet.
7. Работают три pricing tier.
8. Работают preferences.
9. Работают allergy restrictions.
10. Определяется геолокация.
11. Работает address autocomplete.
12. Проверяется delivery area.
13. Работает OTP.
14. Работает хотя бы один wallet + card.
15. Restaurant matching автоматизирован.
16. Restaurant может принять/отклонить заказ.
17. Restaurant может отметить food ready.
18. Customer получает tracking.
19. Customer получает push events.
20. До доставки ресторан скрыт.
21. После доставки работает reveal.
22. Пользователь может поставить rating.
23. Администратор видит каждый заказ.
24. Администратор может вмешаться в проблемный заказ.
25. Все критические backend actions логируются.

---

# 88. UX Target

Для returning user идеальный flow должен выглядеть так:

```text
Open
↓
Savory
↓
₪99
↓
Apple Pay
```

То есть практически:

**3 решения + подтверждение платежа.**

Preferences, allergies и address уже хранятся.

Это должен быть один из главных KPI дизайна.

---

# 89. Основной UX-flow

```text
                         ┌───────────────┐
                         │   OPEN APP    │
                         └───────┬───────┘
                                 │
                                 ▼
                         ┌───────────────┐
                         │ SAVORY/SWEET  │
                         └───────┬───────┘
                                 │
                                 ▼
                       ┌───────────────────┐
                       │ DIET / ALLERGIES  │
                       └─────────┬─────────┘
                                 │
                                 ▼
                      ┌─────────────────────┐
                      │ 79 / 99 / 149 ₪     │
                      └──────────┬──────────┘
                                 │
                                 ▼
                       ┌───────────────────┐
                       │      ADDRESS      │
                       └─────────┬─────────┘
                                 │
                                 ▼
                       ┌───────────────────┐
                       │ AUTH IF REQUIRED  │
                       └─────────┬─────────┘
                                 │
                                 ▼
                       ┌───────────────────┐
                       │      PAYMENT      │
                       └─────────┬─────────┘
                                 │
                                 ▼
                       ┌───────────────────┐
                       │     MATCHING      │
                       └─────────┬─────────┘
                                 │
                                 ▼
                       ┌───────────────────┐
                       │    PREPARING      │
                       └─────────┬─────────┘
                                 │
                                 ▼
                       ┌───────────────────┐
                       │     DELIVERY      │
                       └─────────┬─────────┘
                                 │
                                 ▼
                       ┌───────────────────┐
                       │      REVEAL       │
                       └─────────┬─────────┘
                                 │
                                 ▼
                       ┌───────────────────┐
                       │      RATING       │
                       └───────────────────┘
```

---

# 90. Architecture of the complete ecosystem

В результате продукт состоит не из одного PWA, а из трех интерфейсов:

```text
                     PLATFORM
                        │
         ┌──────────────┼──────────────┐
         │              │              │
         ▼              ▼              ▼
     CUSTOMER       RESTAURANT        ADMIN
       PWA             WEB             WEB
         │              │              │
         └──────────────┼──────────────┘
                        │
                        ▼
                     BACKEND
                        │
       ┌────────────────┼─────────────────┐
       ▼                ▼                 ▼
    PAYMENT          DELIVERY          MAPS
```

---

# 91. Что я бы зафиксировал до начала разработки

Есть **7 решений**, которые непосредственно влияют на архитектуру и деньги проекта:

1. **Включена ли доставка в ₪79/99/149 или идет отдельно.**
2. **Показывается ли ресторан после delivery или остается анонимным вообще.**
3. **Кто организует доставку — платформа, ресторан или внешний provider.**
4. **Какие конкретно allergies допускаются в MVP.**
5. **Может ли ресторан менять свою availability автоматически.**
6. **Какая минимальная ценность должна находиться внутри каждого tier.**
7. **Когда именно capture payment происходит — до или после acceptance ресторана.**

Без этих решений интерфейс можно спроектировать, но backend и unit economics окончательно фиксировать рано.

---

# 92. Рекомендуемая последовательность разработки

Я бы не отдавал команде задачу «сделать приложение» целиком сразу.

Правильнее разбить проект следующим образом:

### Phase 0 — Product Design
User flow → wireframes → visual identity → clickable prototype.

### Phase 1 — Marketplace Core
Restaurants → orders → matching → statuses.

### Phase 2 — Customer PWA
Order flow → auth → payment → tracking.

### Phase 3 — Restaurant Portal
Accept → prepare → ready.

### Phase 4 — Admin & Operations
Monitoring → intervention → refunds.

### Phase 5 — Integrations
Delivery → push → analytics.

### Phase 6 — Closed Beta
5–15 ресторанов.

### Phase 7 — Product optimization
Conversion → retention → personalization.

---

# 93. Definition of Done для дизайнера

Перед передачей frontend-команде дизайнер должен подготовить:

- полный Figma flow;
- mobile screens;
- loading states;
- empty states;
- error states;
- offline state;
- payment states;
- restaurant unavailable flow;
- RTL Hebrew version;
- responsive behavior;
- design system;
- mascot states;
- transition specification;
- prototype основного checkout;
- ресторанный интерфейс;
- базовый admin flow.

---

# 94. Definition of Done для разработки

Feature считается завершенной только если:

- frontend реализован;
- backend реализован;
- validation есть;
- loading state есть;
- error state есть;
- analytics event есть;
- локализация есть;
- RTL проверен;
- mobile проверен;
- logging есть;
- QA acceptance criteria пройдены.

---

## Финальная продуктовая формула

Это важно сохранить на протяжении всей разработки:

> **Пользователь выбирает не еду. Пользователь выбирает настроение, ограничения и цену.**

Все остальное должна делать система.

Если в какой-то момент приложение начнет превращаться в:

> рестораны → кухни → категории → блюда → модификаторы → корзина,

то продукт потеряет свое ключевое отличие от Wolt, 10bis и других delivery marketplaces.

Для пользователя интерфейс должен ощущаться почти примитивным.

Под ним при этом может находиться довольно сложная система:

**matching + payments + restaurant routing + allergens + delivery + personalization.**

Именно эта асимметрия — **очень простой frontend и сложный backend** — здесь является правильной архитектурой продукта.